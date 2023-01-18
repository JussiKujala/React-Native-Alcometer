import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import RadioButtons from './modules/radiobuttons';
import style from './styles/style';

export default function App() {

  const [hours, setHours] = useState(0);
  const [drinks, setDrinks] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);

  const [display, setDisplay] = useState("hidden");

  return (
    <View style={[display === "shown" ? style.container : style.hiddenContainer]}>
      <Switch 
      onValueChange={() => setDisplay(display === "hidden" ? "shown": "hidden")}
      value={display === "shown"}
      />
      <Text>Alcometer</Text>
      <Text>Weight</Text>
      <TextInput></TextInput>
      <Text>Drinks</Text>
      <View style={{flexDirection:"row"}}>
      <Button
          title="-"
          onPress={() => setDrinks(Number(drinks) - 1)}
        />
        <Button
          title="+"
          onPress={() => setDrinks(Number(drinks) + 1)}
        />
        </View>
        <Text>{drinks}</Text>


      <Text>Hours</Text>
      <View style={{flexDirection:"row"}}>
      <Button
          title="-"
          onPress={() => setHours(Number(hours) - 1)}
        />
        <Button
          title="+"
          onPress={() => setHours(Number(hours) + 1)}
        />
        </View>
        <Text>{hours}</Text>
        <RadioButtons/>
        <Button
          title="Calculate"
          onPress={() => setResult(Number(result) + 1)}
        />
      <Text>{result}</Text>
      </View>
  );
}


