import {  createUserDocumetFromAuth ,signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SingIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        const userDoRef = createUserDocumetFromAuth(user)

    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in With Google Popup
            </button>
        </div>
    )
}

export default SingIn;