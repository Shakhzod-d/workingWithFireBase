import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  // TODO: need to use .ENV file instead of using all cridentials here below later
  apiKey: "AIzaSyB_NCXhu_KKN5AKYFDgYBhmgG987kKNRBU",
  authDomain: "calendar-b2841.firebaseapp.com",
  projectId: "calendar-b2841",
  storageBucket: "calendar-b2841.appspot.com",
  messagingSenderId: "770496166334",
  appId: "1:770496166334:web:bb1729f9f639c0d56521ef",
};

const provider = new GoogleAuthProvider();
export const signInWithGoogle = (navigate) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      navigate();
    })
    .catch((error) => {
      console.log(error);
    });
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
