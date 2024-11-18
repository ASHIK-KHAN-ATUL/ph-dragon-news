import { createContext, useEffect, useState } from "react";
import app from "../components/Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState( null);
    const [loading , setLoading] = useState(true)
    console.log(loading ,user);

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email , password)
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =  () => {
        return signOut(auth);
    }


    const authinfo = {
        user , setUser, createNewUser, logOut, userLogin, loading
    }

    useEffect( () => {
       const unsubscribe = onAuthStateChanged(auth , currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    },[])

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;