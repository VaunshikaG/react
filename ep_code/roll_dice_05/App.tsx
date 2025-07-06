import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// declared the imgs as module in src/index.d.ts
import DiceOne from '../../assets/One.png';
import DiceTwo from '../../assets/Two.png';
import DiceThree from '../../assets/Three.png';
import DiceFour from '../../assets/Four.png';
import DiceFive from '../../assets/Five.png';
import DiceSix from '../../assets/Six.png';

// declared a type - whenever i declare die component it will pass imgs
type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

// component dice
const Dice = ({imageUrl}: DiceProps) => {
  return (
    <View>
      <Image style={styles.diceImg} source={imageUrl} />
    </View>
  );
};

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

function DiceApp() {
  const [diceImg, setDiceImg] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImg(DiceOne);
        break;
      case 2:
        setDiceImg(DiceTwo);
        break;
      case 3:
        setDiceImg(DiceThree);
        break;
      case 4:
        setDiceImg(DiceFour);
        break;
      case 5:
        setDiceImg(DiceFive);
        break;
      case 6:
        setDiceImg(DiceSix);
        break;

      default:
        setDiceImg(DiceOne);
        break;
    }

    ReactNativeHapticFeedback.trigger('impactMedium', options);
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImg} />
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceImg: {
    height: 200,
    width: 200,
  },
  rollDiceBtnText: {
    marginTop: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default DiceApp;
