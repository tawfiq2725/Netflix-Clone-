
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth ,signOut} from "firebase/auth";
import { addDoc,collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBePlCw9bYWqC47yH2KuAWD1JdXxymKSQY",
  authDomain: "netflix-clone-151d8.firebaseapp.com",
  projectId: "netflix-clone-151d8",
  storageBucket: "netflix-clone-151d8.appspot.com",
  messagingSenderId: "582742132890",
  appId: "1:582742132890:web:c65bfd92209dd20c107723"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
          uid: user.uid,
          name,
          authProvider: "local",
          email
      })
      toast.success("Successfully Registerd...")
    } catch (error) {
        console.log(error)
       toast.error(error.code.split("/")[1].split("-").join(" "))
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
        toast.success("Successfully Login...")
    } catch (error) {
        console.log(error)
        toast.error(error.code.split("/")[1].split("-").join(" "))
    }

}

const logout = () => {
    signOut(auth)
}

export { auth, db, signup, login, logout }