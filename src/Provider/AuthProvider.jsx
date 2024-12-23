;
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useCallback, useEffect, useState } from "react";
import auth from "../Firebase/firebase";



export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = useCallback(
        (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password);
        }
    )

    const loginUser = useCallback(
        (email, password) => {
            return signInWithEmailAndPassword(auth, email, password);
        }
    )

    const googleLogin = useCallback(
        () => {
            return signInWithPopup(auth, new GoogleAuthProvider())
        }
    )

    const logoutUser = useCallback(() => {
        return signOut();
    })

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser);

        })

        return () => {
            unsubscribe();
        }

    }, [createUser, loginUser, logoutUser, googleLogin])



    const info = {
        user,
        setUser,
        createUser,
        loginUser,
        logoutUser,
        googleLogin,

    }


    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;