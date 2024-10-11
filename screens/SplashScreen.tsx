import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Import NativeStackNavigationProp

// Define Props interface (no equals sign needed)
interface Props {
    navigation: NativeStackNavigationProp<any, 'Login'>; 
     // any is the type of the param list
     // 'Login' is the name to identify the navigation stack that is being worked on
}

const SplashScreen = ({ navigation }: Props): JSX.Element => {  // Corrected return type and arrow function
    return (
        <View style={styles.container}>
            {/* Add your content here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default SplashScreen;
