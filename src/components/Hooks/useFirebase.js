import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
initializeAuthentication()


const useFirebase = () => {

    const [user, setUser] = useState({});

    const auth = getAuth();


    const signInUsingGoogle = () => {
      
        const googleProvider = new GoogleAuthProvider();

       return signInWithPopup(auth, googleProvider)
            // .then(result => {
            //     setUser(result.user);
            // })
           
    }



     // observe user state change
 useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
        if (user) {
            setUser(user);
        }
        else {
            setUser({})
        }
        
    });
    return () => unsubscribed;
}, [])




const logOut = () => {
   
    signOut(auth)
        .then(() => { })
        
}
return {
    user,
  
    signInUsingGoogle,
    logOut
}


}
export default useFirebase;

