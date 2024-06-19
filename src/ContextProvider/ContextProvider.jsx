import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

import app from "../Firebase/firebase.config";
import { axiosCommon } from "../Hooks/useAxiosCommon";




const auth = getAuth(app);

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();



const ContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState({});


    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, image) => {
        // setLoading(true);

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })

    }

    const GoogleSignIn = () => {
        setLoading(true);

        return signInWithPopup(auth, provider);
    }


    const Login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const Logout = () => {
        setLoading(true);

        setUser(null);
        signOut(auth);
    }

    // save user
    const saveUser = async user => {
        const currentUser = {
            Name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
            role: 'user',
            status: 'Verified',
        }
        const { data } = await axiosCommon.put('/user', currentUser)
        
        return data;
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {


            if (currentUser) {
                console.log("User changed", currentUser);
                setLoading(false);
                setUser(currentUser);
                setLoading(false);
                saveUser(currentUser);
            } else {
                setUser(null);
                setLoading(false)

            }



        })

        return () => {
            unsubscribe();
        }

    }, []);

    const authInfo = {
        user,
        auth,
        loading, setLoading,
        registerUser,
        Login,
        Logout,
        GoogleSignIn,
        updateUserProfile, setInfo, info
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextProvider;
