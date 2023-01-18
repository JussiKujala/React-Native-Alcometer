import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const RadioButtons = () => {
  const [selected, setSelected] = useState('');

  return (
    <View style={{flexDirection:"row"}}>
      <TouchableOpacity 
        style={selected === 'one' ? styles.selected : styles.notSelected} 
        onPress={() => setSelected('one')}
      >
        <Text>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={selected === 'two' ? styles.selected : styles.notSelected} 
        onPress={() => setSelected('two')}
      >
        <Text>Female</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  selected: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
  },
  notSelected: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
  },
});

export default RadioButtons;