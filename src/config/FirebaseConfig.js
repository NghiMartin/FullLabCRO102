import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, initializeAuth, getReactNativePersistence} from 'firebase/auth';
import { getDatabase } from "firebase/database";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCd9gu_SFnpy9EQMOUgNTNOZ_ToPfbZNho",
  authDomain: "fulllab-cro102.firebaseapp.com",
  databaseURL: "https://fulllab-cro102-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fulllab-cro102",
  storageBucket: "fulllab-cro102.appspot.com",
  messagingSenderId: "9945529722",
  appId: "1:9945529722:web:81a27219ee04efd22deac3",
  measurementId: "G-Q273NLQN3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const auth = getAuth(app); 
const database = getDatabase(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export { app, analytics, auth, database };
