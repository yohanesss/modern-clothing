import { createContext, useEffect, useState } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.util";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubsribe = onAuthStateChangedListener(async (user) => {
      if (user) await createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });
    return unsubsribe;
  }, []);

  console.log({ currentUser });

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
