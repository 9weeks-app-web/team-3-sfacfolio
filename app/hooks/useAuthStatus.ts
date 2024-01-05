import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';

export default function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setLoggedIn(true);
      }
    });
  }, []);

  return { loggedIn, setLoggedIn };
}
