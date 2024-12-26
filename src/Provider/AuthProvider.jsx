;
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useCallback, useEffect, useState } from "react";
import auth from "../Firebase/firebase";



export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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

    const updateUserProfile = (info) => {
        // console.log(info);
        return updateProfile(auth.currentUser, info);
    }

    const logoutUser = useCallback(() => {
        return signOut(auth);
    })

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {


            setUser(currentUser);

            if (currentUser) {
                const user = { email: currentUser.email };
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => console.log(res.data));
            }
            else {
                axios.post(`http://localhost:5000/logout`, {}, { withCredentials: true })
                    .then(res => console.log(res.data));
            }
            
            setLoading(false);
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
        updateUserProfile,
        loading, setLoading,
    }


    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;