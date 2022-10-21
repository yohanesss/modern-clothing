// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";

import { Category } from "../../store/categories/category.types";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAISQPuwMggdrxBBYgUivWvvtPlkRNEEm4",
  authDomain: "modern-clothing-db-9cf2a.firebaseapp.com",
  projectId: "modern-clothing-db-9cf2a",
  storageBucket: "modern-clothing-db-9cf2a.appspot.com",
  messagingSenderId: "724038796379",
  appId: "1:724038796379:web:85d8961f8fffe363f6eb7e",
  measurementId: "G-5MVEBG0D4X",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export type ObjectToAdd = {
  title: string;
};

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(
      collectionRef,
      object[collectionKey as keyof ObjectToAdd].toLowerCase()
    );
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("addCollectionAndDocuments successfully added");
};

export const getCategoriesAndDocuments = async (
  collectionName: string
): Promise<Category[]> => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef);

  const querySnapshop = await getDocs(q);
  return querySnapshop.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
  );
  // const categoryMap = querySnapshop.docs.reduce((acc, docSnapshot) => {
  //   const title = docSnapshot.get("title");
  //   const items = docSnapshot.get("items");
  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {});

  // return categoryMap;
};

export type UserAdditionalInformation = {
  displayName?: string;
};

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  userAdditionalInformation = {} as UserAdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;
  const userDocRef = await doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const userData = {
      displayName,
      email,
      createdAt,
      ...userAdditionalInformation,
    };

    try {
      setDoc(userDocRef, userData);
    } catch (error) {
      console.log("[error]", error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) throw new Error("email and password is needed!");
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) throw new Error("email and password is needed!");
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (
  fnCallBack: NextOrObserver<User>
) => {
  if (!fnCallBack) throw new Error("function callback is needed!");
  return onAuthStateChanged(auth, fnCallBack);
};

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubsribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubsribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
