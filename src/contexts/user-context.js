import { useEffect, useState, createContext } from "react";

import { onAuthStateChangedListener } from '../utils/firebase/firebase'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
}); 

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    // returns callback with user as its param
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user)
    })
  }, [])

    return <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>;
};