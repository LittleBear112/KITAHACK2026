// src/lib/useAuthState.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

// 全局登录上下文
const AuthContext = createContext({
  user: null,
  loading: true
});

// Provider：包在 <BrowserRouter> 外面
export function AuthProvider({ children }) {
  const [state, setState] = useState({
    user: null,
    loading: true
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(
      auth,
      user => {
        setState({ user, loading: false });
      },
      () => {
        setState({ user: null, loading: false });
      }
    );

    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  );
}

// 方便页面里直接用
export function useAuthState() {
  return useContext(AuthContext);
}
