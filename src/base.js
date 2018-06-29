import Rebase from 're-base';
import firbase from 'firebase';

const firebaseApp = firbase.initializeApp({
   apiKey: "AIzaSyB8FYxWb3moOJWxtwjeqZxe8Pv_xpDoxqg",
   authDomain: "catch-of-the-day-699aa.firebaseapp.com",
   databaseURL: "https://catch-of-the-day-699aa.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp } ;

export default base;
