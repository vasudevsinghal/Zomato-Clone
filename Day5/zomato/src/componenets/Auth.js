import React, {useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "../utils/firebase";
import axios from "../utils/axios";

  // Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ]
};

export default function Auth({setUser}) {
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
            // console.log(user);
            if(user){
                firebase.auth().currentUser.getIdToken().then((token) => {
                    axios.defaults.headers.common.Authorization= `Bearer ${token}`;                
                });
            }   
        });
        });
    return (
        <div>
          <h1>Welcome to Zomato Clone</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
    );
}