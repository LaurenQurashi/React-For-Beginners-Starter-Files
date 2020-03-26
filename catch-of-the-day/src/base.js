import Rebase from "re-base";
// This is a react-firebase package that will let us mirror our state to our firebase changes. 
import firebase from "firebase";
// This is for everything that is not just mirroring to state. 


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBwXcMOtu2DsGlwkAx0HMeIu4XAD5XCshU",
    authDomain: "catch-of-the-day-lauren-q.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-lauren-q.firebaseio.com",
    projectId: "catch-of-the-day-lauren-q",
    storageBucket: "catch-of-the-day-lauren-q.appspot.com",
    messagingSenderId: "25630514161",
    appId: "1:25630514161:web:878f6a3b73b21109500250",
    measurementId: "G-B9KRBVM4D8"
})

const base = Rebase.createClass(firebaseApp.database())
// This is our rebase bindings. It creates our rebase, and database is a function that returns the actual database.

// this is a named export.
export { firebaseApp };

// this is a default export.
export default base;