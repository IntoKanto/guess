import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [guess, setGuess] = useState('');
  const [kertoja, setKertoja] = useState(1);
  const [num, setNum] = useState(Math.floor(Math.random() * 100) +1);
  const [teksti ,setTeksti] = useState('Guess a number');

  
  

  const arvaus = () => {

    if (guess > num) {
      setTeksti('Your guess is too high')
      setKertoja(kertoja + 1)
    }
    else if (guess < num) {
      setTeksti('Your guess is too low')
      setKertoja(kertoja + 1)
    }
    else {
      Alert.alert('You guessed the number in ' + kertoja + ' guesses')
      setTeksti('Guess a number');
      setKertoja(1);
      setNum(Math.floor(Math.random() * 100) +1)
    }
    setGuess('');
    
    
  }



  return (
    <View style={styles.container}>
     <Text>{teksti}</Text>
     <TextInput
     style={styles.input}
     value={guess}
     onChangeText={guess => setGuess(guess)}
     keyboardType='numeric'
     /> 
     <Button
     title='Make a guess' 
     onPress={arvaus}
     />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 50,
    borderColor: 'blue',
    borderWidth: 1
  },
  buttons: {
    justifyContent: 'flex-start'
  },
});
