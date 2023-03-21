import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  // TODO: need to use .ENV file instead of using all cridentials here below later
  apiKey: "AIzaSyB_NCXhu_KKN5AKYFDgYBhmgG987kKNRBU",
  authDomain: "calendar-b2841.firebaseapp.com",
  projectId: "calendar-b2841",
  storageBucket: "calendar-b2841.appspot.com",
  messagingSenderId: "770496166334",
  appId: "1:770496166334:web:bb1729f9f639c0d56521ef"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



// ************************************************************************

// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyANfoLDGZsVAl8NwHJUlgLrUynJJMaSsg0",
//   authDomain: "auth-8b1ef.firebaseapp.com",
//   projectId: "auth-8b1ef",
//   storageBucket: "auth-8b1ef.appspot.com",
//   messagingSenderId: "445273762769",
//   appId: "1:445273762769:web:81f403cae7cb5fe3760ef0",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const profilePic = result.user.photoURL;

//       localStorage.setItem("name", name);
//       localStorage.setItem("email", email);
//       localStorage.setItem("profilePic", profilePic);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };