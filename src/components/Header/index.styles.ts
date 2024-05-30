import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {fontSizes} from '../../utils/fontUtils';
import {respHeight, respSize, statusBarHeight} from '../../utils/utils';

/**
 * @description
 * 196 total - 36 to get header height from header
 * Subtracting status bar height as it is included in 192
 */
const headerHeight = 196 - 36 - statusBarHeight;

export const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: respSize(30),
    zIndex: 3,
    height: respHeight(headerHeight),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftInnerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.medium,
  },
  img: {
    height: respHeight(20),
    width: respSize(20),
  },
  inputField: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    flex: 1,
    marginLeft: respSize(20),
    color: colors.white,
  },
});
