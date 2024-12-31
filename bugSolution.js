// bugSolution.js
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

const App = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      keyExtractor={(item) => item.id} // Correct keyExtractor
    />
  );
};

export default App;