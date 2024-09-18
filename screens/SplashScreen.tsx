import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Import NativeStackNavigationProp


type Props = {
    navigation: NativeStackNavigationProp<any, 'Login'>; 
     // any is the type of the param list
     // 'Login' is the name to identify the navigation stack that is being worked on
  };
  
const SplashScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>

        </View>
          );
        };

       const styles = StyleSheet.create({
            container: {
                flex: 1,
            }
       });