import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";
import { ref, onValue } from "firebase/database";

export function useRole() {
  const [state, setState] = useState({
    role: "employee",
    employer: false,
    loaded: false,
  });

  useEffect(() => {
    let unsubProfile = () => {};
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        unsubProfile();
        setState({ role: "employee", employer: false, loaded: true });
        return;
      }

      const profileRef = ref(db, "profiles/" + user.uid);
      unsubProfile = onValue(
        profileRef,
        (snap) => {
          const val = snap.val() || {};
          const role = val.role || "employee";
          setState({
            role,
            employer: role === "employer",
            loaded: true,
          });
        },
        () => {
          setState({
            role: "employee",
            employer: false,
            loaded: true,
          });
        }
      );
    });

    return () => {
      unsubAuth();
      unsubProfile();
    };
  }, []);

  return state;
}
