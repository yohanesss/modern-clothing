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
} from "firebase/firestore";

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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  fieldFromObjectToDocId = "title"
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(
      collectionRef,
      object[fieldFromObjectToDocId].toLowerCase()
    );
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("addCollectionAndDocuments successfully added");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshop = await getDocs(q);
  return querySnapshop.docs.map((docSnapshot) => docSnapshot.data());
  // const categoryMap = querySnapshop.docs.reduce((acc, docSnapshot) => {
  //   const title = docSnapshot.get("title");
  //   const items = docSnapshot.get("items");
  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {});

  // return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  userAdditionalInformation = {}
) => {
  if (!userAuth) throw new Error("userAuth is needed!");
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

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) throw new Error("email and password is needed!");
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) throw new Error("email and password is needed!");
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (fnCallBack) => {
  if (!fnCallBack) throw new Error("function callback is needed!");
  return onAuthStateChanged(auth, fnCallBack);
};
