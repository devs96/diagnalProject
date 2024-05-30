import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const heightMobileUI = 896;
const widthMobileUI = 414;

export const respSize = (width: number) => {
  return (Dimensions.get('window').width * width) / widthMobileUI;
};

export const respHeight = (height: number) => {
  return (Dimensions.get('window').height * height) / heightMobileUI;
};

export const deviceWidth = Dimensions.get('screen').width;

export const statusBarHeight = getStatusBarHeight();
