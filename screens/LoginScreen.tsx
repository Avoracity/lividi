// screens/LoginScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Import NativeStackNavigationProp

type Props = {
  navigation: NativeStackNavigationProp<any, 'Login'>; 
   // any is the type of the param list
   // 'Login' is the name to identify the navigation stack that is being worked on
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Cat_Body.png')} style={styles.catBody}/>
      <Image source={require('../assets/images/Cat_Paw.png')} style={styles.catPaw}/>
      <View style={styles.loginContainer}>
      <Image source={require('../assets/images/Lividi_Title.png')} style={styles.lividiTitle}/>
  
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
    height: '75%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1, // level of layering
  }, 
  
  catPaw: {
    marginLeft: '14%',
    top: '3%',
    height : 40,
    width: 30,
    zIndex: 2,
    
  },
  catBody: {
    marginLeft: '60%',
    top: '15%',
    zIndex:0,
  },
  lividiTitle: {
    bottom: '20%',
  },
  
});

export default LoginScreen;
