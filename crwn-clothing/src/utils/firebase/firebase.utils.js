import {initializeApp} from 'firebase/app'
//for signin
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCmjhvycmajEyVoTfhCLwGqIa9eLMo0m3c",
    authDomain: "crwn-clothing-db-a1e9d.firebaseapp.com",
    projectId: "crwn-clothing-db-a1e9d",
    storageBucket: "crwn-clothing-db-a1e9d.appspot.com",
    messagingSenderId: "686842827458",
    appId: "1:686842827458:web:dba3b5c593349d0075215b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  //to use google authentication we need a provider 
  const provider = new GoogleAuthProvider();
  //we can tell different wau of authentication using setCustomParameters
  provider.setCustomParameters({
    prompt: 'select_account'
  })

  //the mean of select_account is when ever the user want to auth to our website we fourcing them to select an account

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider)