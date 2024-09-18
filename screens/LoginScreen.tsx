// screens/LoginScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Import NativeStackNavigationProp

type Props = {
  navigation: NativeStackNavigationProp<any, 'Login'>; 
   // any is the type of the param list
   // 'Login' is the name to identify the navigation stack that is being worked on
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
      <Text>Login Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end', // all items will flex from bottom to top
    backgroundColor: '#1C4748',
  },
  loginContainer: {
    backgroundColor: '#358C8E',
    width: '100%',
    height: '80%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
   
  }
});

export default LoginScreen;
