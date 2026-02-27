// screens/HomeScreen.tsx
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  navigation: NativeStackNavigationProp<any, 'Login'>;
 }

const HomeScreen = ({ navigation }: Props ) : JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
