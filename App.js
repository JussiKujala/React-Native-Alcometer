import { Button, Switch, Text, View, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import style from './styles/style';
import NumericInput from 'react-native-numeric-input';


export default function App() {

  const [hours, setHours] = useState(0);
  const [drinks, setDrinks] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0);
  const [display, setDisplay] = useState("light");
  const switchTheme = (display === "dark" ? style.dark : style.light)

  function calculateAlcoholLevel() {

    let litres = drinks * 0.33
    let grams = litres * 8 * 4.5
    let burning = (weight / 10)
    let grams_left = ((grams - (burning * hours)))
    let alcohol_level = 0

    if (gender === 'male') {
      alcohol_level = (grams_left / (weight * 0.7))
      setResult(alcohol_level)
    }

    else if (gender === 'female') {
      alcohol_level = (grams_left / (weight * 0.6))
      setResult(alcohol_level)
    }

    if (alcohol_level < 0) {
      setResult(0)
    }

    if (!weight) {
      Alert.alert('Please enter a value for weight.');
    } else if (weight < 0) {
      Alert.alert('Weight cannot be a negative number!');
    }

    if (alcohol_level === Infinity) {
      setResult(0)
    }

  }

  const radioStyle = { flexDirection: 'row', alignItems: 'center' };

  return (
    <View style={[style.container, switchTheme]}>
      <Switch
        onValueChange={() => setDisplay(display === 'light' ? 'dark' : 'light')}
        value={display === "dark"}
      />
      <Text style={[style.heading, switchTheme]}>Alcometer</Text>
      <Text style={[style.textStyle, switchTheme]}>Weight</Text>
      <NumericInput rightButtonBackgroundColor={display === 'light' ? 'white' : 'gray'} leftButtonBackgroundColor={display === 'light' ? 'white' : 'gray'} textColor={display === 'light' ? 'black' : 'white'} onChange={w => setWeight(w)} />
      <Text style={[style.textStyle, switchTheme]}>Drinks</Text>
      <NumericInput rightButtonBackgroundColor={display === 'light' ? 'white' : 'gray'} leftButtonBackgroundColor={display === 'light' ? 'white' : 'gray'} textColor={display === 'light' ? 'black' : 'white'} onChange={d => setDrinks(d)} />
      <Text style={[style.textStyle, switchTheme]}>Hours</Text>
      <NumericInput rightButtonBackgroundColor={display === 'light' ? 'white' : 'gray'} leftButtonBackgroundColor={display === 'light' ? 'white' : 'gray'} textColor={display === 'light' ? 'black' : 'white'} onChange={c => setHours(c)} />

      <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
        <View style={radioStyle}>
          <RadioButton style={[style.container, switchTheme]} value='male' />
          <Text style={[style.textStyle, switchTheme]}>Male</Text>

        </View>
        <View style={radioStyle}>
          <RadioButton value='female' />
          <Text style={[style.textStyle, switchTheme]}>Female</Text>

        </View>
      </RadioButton.Group>

      <TouchableOpacity style={[style.button, switchTheme]}
        title="Calculate"
        onPress={calculateAlcoholLevel}
      >
        <Text style={[style.textStyle, switchTheme]}>Calculate</Text>
      </TouchableOpacity>
      <Text style={[style.result, switchTheme]}>{result.toFixed(2)}</Text>
    </View>
  );
}


