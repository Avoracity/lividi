import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as AppleAuthentication from 'expo-apple-authentication';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import GoogleSignInButton from '../assets/styles/GoogleSignInButton.js';

type Props = {
  navigation: NativeStackNavigationProp<any, 'Login'>;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [isAppleAvailable, setIsAppleAvailable] = useState<boolean>(false);

  // Configure Google sign-in
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com', // Replace with your webClientId
  });

  useEffect(() => {
    // Check if Apple Authentication is available
    const checkAppleAvailability = async () => {
      const available = await AppleAuthentication.isAvailableAsync();
      setIsAppleAvailable(available);
    };
    checkAppleAvailability();
  }, []);

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      console.log('Google ID Token:', id_token);
      // Handle the user info (e.g., navigation or saving the token)
    }
  }, [response]);

  const handleGoogleSignIn = () => {
    promptAsync();
  };

  const handleAppleSignIn = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      console.log('Apple Credential:', credential);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Cat_Body.png')} style={styles.catBody} />
      <Image source={require('../assets/images/Cat_Paw.png')} style={styles.catPaw} />
      <View style={styles.loginContainer}>
        <Image source={require('../assets/images/Lividi_Title.png')} style={styles.lividiTitle} />
        <Text>Login Screen</Text>

        {/* Google Sign-In Button */}
        <GoogleSignInButton onPress={handleGoogleSignIn} />

        {/* Apple Sign-In Button (only available on iOS) */}
        {isAppleAvailable && (
          <AppleAuthentication.AppleAuthenticationButton
            buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
            buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
            style={styles.appleButton}
            onPress={handleAppleSignIn}
          />
        )}

        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#1C4748',
  },
  loginContainer: {
    backgroundColor: '#358C8E',
    width: '100%',
    height: '75%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  catPaw: {
    marginLeft: '14%',
    top: '3%',
    height: 40,
    width: 30,
    zIndex: 2,
  },
  catBody: {
    marginLeft: '60%',
    top: '15%',
    zIndex: 0,
  },
  lividiTitle: {
    bottom: '20%',
  },
  appleButton: {
    width: 200,
    height: 44,
    marginTop: 10,
  },
});

export default LoginScreen;
