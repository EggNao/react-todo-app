import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAZf7p5te4vm0pAIEFst-rFgFtbYawwnf0',
  authDomain: 'react-todo-app-5d426.firebaseapp.com',
  projectId: 'react-todo-app-5d426',
  storageBucket: 'react-todo-app-5d426.appspot.com',
  messagingSenderId: '878067763188',
  appId: '1:878067763188:web:94b66a04693d272d069ba1',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const provider = new GoogleAuthProvider()
export const auth = getAuth()
