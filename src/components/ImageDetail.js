import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = ({ title, imgSource, imgScore }) => {
  return (
    <View>
      <Image source={imgSource} />
      <Text>{title}</Text>
      <Text>Image score - {imgScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
