import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title='Forest'
        imgSource={require('../../assets/forest.jpg')}
        imgScore={4}
      />
      <ImageDetail
        title='Beach'
        imgSource={require('../../assets/beach.jpg')}
        imgScore={8}
      />
      <ImageDetail
        title='Mountain'
        imgSource={require('../../assets/mountain.jpg')}
        imgScore={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
