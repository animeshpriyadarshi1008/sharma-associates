import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCr8l8MKO69EAGcWH5Hd0kG_w0qp71EIoU",
  authDomain: "sharma-associates-4d134.firebaseapp.com",
  databaseURL: "https://sharma-associates-4d134.firebaseio.com",
  projectId: "sharma-associates-4d134",
  storageBucket: "sharma-associates-4d134.appspot.com",
  messagingSenderId: "713000519881",
  appId: "1:713000519881:web:58d79db8154b05c9f4e518",
  measurementId: "G-9KL8D94RXS",
};

const FirebaseConfig = Firebase.initializeApp(firebaseConfig);
const db = Firebase.firestore();
const storage = Firebase.storage();
const realTimeDb = Firebase.database();
const bucketName = "Resume";

export { FirebaseConfig, db, storage, bucketName, realTimeDb };
