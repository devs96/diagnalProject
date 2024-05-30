import {Dimensions} from 'react-native';

const heightMobileUI = 896;
const widthMobileUI = 414;

export const respSize = (width: number) => {
  return (Dimensions.get('window').width * width) / widthMobileUI;
};

export const respHeight = (height: number) => {
  return (Dimensions.get('window').height * height) / heightMobileUI;
};

export const deviceWidth = Dimensions.get('screen').width;
