import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello There!</Text>
      <Text style={styles.subText}>🛫My Practice Apps for React Native🛫</Text>
      <Button
        title='Go to Components Demo'
        onPress={() => {
          navigation.navigate('Components');
        }}
      />
      <Button
        title='Go to List Demo'
        onPress={() => {
          navigation.navigate('List');
        }}
      />
      <Button
        title='Go to Image Demo'
        onPress={() => {
          navigation.navigate('Image');
        }}
      />
      <Button
        title='Go to Counter Demo'
        onPress={() => {
          navigation.navigate('Counter');
        }}
      />
      <Button
        title='Go to Colors Demo'
        onPress={() => {
          navigation.navigate('Colors');
        }}
      />
      <Button
        title='Go to Square Demo'
        onPress={() => {
          navigation.navigate('Square');
        }}
      />
      <Button
        title='Go to Text Demo'
        onPress={() => {
          navigation.navigate('Text');
        }}
      />
      <Button
        title='Go to Password Demo'
        onPress={() => {
          navigation.navigate('Password');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 10,
  },
  subText: {
    fontSize: 22,
    textAlign: 'center',
    paddingBottom: 10,
  },
});

export default HomeScreen;
