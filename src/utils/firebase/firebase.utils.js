import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD3kVdUI_XdhM0JyilBki9uOdRr9CpQ7dE",
    authDomain: "ecommerce-db-4af53.firebaseapp.com",
    projectId: "ecommerce-db-4af53",
    storageBucket: "ecommerce-db-4af53.appspot.com",
    messagingSenderId: "185414671067",
    appId: "1:185414671067:web:2b6e0c4f3bff3536a6cafe"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();
  export const createUserDocumetFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)  
    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()){
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('Error creating the user', error.message)
        }
    }

    return userDocRef
  }