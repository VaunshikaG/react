import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';

// form validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should have 4 characters')
    .max(16, 'Should be maximum of 16 characters')
    .required('Length is required'),
  upperCase: Yup.string(),
});

function PassApp() {
  // [variable, function used to change value]
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  // methods (variable: datatype)
  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const charIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(charIndex);
    }
    return result;
    console.log('createPassword');
  };

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const dightChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCase;
    }
    if (lowerCase) {
      characterList += lowerCase;
    }
    if (numbers) {
      characterList += numbers;
    }
    if (symbols) {
      characterList += symbols;
    }

    const passResult = createPassword(characterList, passwordLength);

    setPassword(passResult);
    setIsPassGenerated(true);
  };

  const resetPassword = () => {
    setPassword('');
    setIsPassGenerated(false);
    setUpperCase(false);
    setLowerCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <SafeAreaView>
      <View></View>
    </SafeAreaView>
  );
}

export default PassApp;
