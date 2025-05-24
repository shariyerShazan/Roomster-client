import React, { createContext, useState, useEffect } from "react";
// import { auth } from "../Firebase/firebase.config";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const MyContext = createContext();

const AuthProvider = ({ children }) => {




  const [theme, setTheme] = useState(() => {
    try {
      const storedTheme = localStorage.getItem("theme");
      return storedTheme ? JSON.parse(storedTheme) : "light"; 
    } catch (e) {
      console.error("Theme parse error:", e);
      return "light";
    }
  });

  useEffect(() => {
  
    localStorage.setItem("theme", theme);
    
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (e) {
      console.error("User parse error:", e);
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const contextValue = {
    theme,
    setTheme,
    user,
    setUser,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

export default AuthProvider;
