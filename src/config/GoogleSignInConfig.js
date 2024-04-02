import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

export async function onGoogleButtonPress() {
    try {
            
    GoogleSignin.configure(
      {
        offlineAccess: false,
        webClientId: '9945529722-ke66tlsm6aic7445c6raicjrhavo0p11.apps.googleusercontent.com',
        scopes: ['profile','email']
    }
    );
   // Check if your device supports Google Play
   await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
   const userInfo = await GoogleSignin.signIn();
   // Get the users ID token
   const { idToken,user } = await GoogleSignin.signIn();
 console.log('idToken', idToken);
 console.log('user', user);

   // Create a oogle credential with the token
   const googleCredential =  auth.GoogleAuthProvider.credential(idToken);
   auth().signInWithCredential(googleCredential);

    return user;
    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
        console.log('LOGIN WITH GOOGLE IS cancelled', error);

          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
        console.log('LOGIN WITH GOOGLE is in progress already', error);

          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
        console.log('LOGIN WITH GOOGLE rvices not available or outdated', error);

          } else {
            // some other error happened
        console.log('LOGIN WITH GOOGLE IS ERROR', error);

          }
    }

  // Sign-in the user with the credential
}