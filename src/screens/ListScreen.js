import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 24 },
    { name: 'Friend #2', age: 16 },
    { name: 'Friend #3', age: 82 },
    { name: 'Friend #4', age: 57 },
    { name: 'Friend #5', age: 43 },
    { name: 'Friend #6', age: 30 },
    { name: 'Friend #7', age: 12 },
    { name: 'Friend #8', age: 8 },
    { name: 'Friend #9', age: 19 },
  ];

  return (
    <FlatList
      // Makes list horizontal
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 15,
  },
});

export default ListScreen;
