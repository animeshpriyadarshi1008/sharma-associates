import Firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_ENV_APIKEY,
  authDomain: process.env.REACT_APP_ENV_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_ENV_DB,
  projectId: process.env.REACT_APP_ENV_PRJID,
  storageBucket: process.env.REACT_APP_ENV_STORAGE,
  messagingSenderId: process.env.REACT_APP_ENV_MSG,
  appId: process.env.REACT_APP_ENV_APPID,
  measurementId: process.env.REACT_APP_ENV_MEASURE,
};

const FirebaseConfig = Firebase.initializeApp(firebaseConfig);
const db = Firebase.firestore();
const storage = Firebase.storage();
const realTimeDb = Firebase.database();
const bucketName = "Resume";

export { FirebaseConfig, db, storage, bucketName, realTimeDb };
