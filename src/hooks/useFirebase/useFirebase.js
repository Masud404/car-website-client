import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from './../../Firebase/Firebase/firebase.init';
const { useState, useEffect } = require("react")



// initializeFirebase
initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    // loading
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    // registaion
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name }
                setUser(newUser);
                // save user to the database
                saveUser(email, name);

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    // signIn User
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {

                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    // signin using google
    const signInUsingGoogle = (location, history) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {

                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    // useEffect
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })

        return () => unsubscribed;
    }, []);


    useEffect(() => {
        fetch(`https://salty-temple-68876.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // logout
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    };


    // saveuser
    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://salty-temple-68876.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }



    return {
        user,
        admin,
        isLoading,
        error,
        registerUser,
        loginUser,
        signInUsingGoogle,
        logout
    }
}

export default useFirebase;