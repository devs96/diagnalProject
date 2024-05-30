import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {deviceWidth, respHeight} from '../../utils/utils';

/**
 * @description
 * 30px gap of both left and right margin
 * 30px gap between 3 views which will be 2 gaps
 * total 30 * 4 divided by 3 columns to get width for 1 box
 */
const itemWidth = (deviceWidth - 4 * 30) / 3;

export const styles = StyleSheet.create({
  mainView: {
    width: itemWidth,
    marginBottom: respHeight(90),
  },
  imageView: {
    /**
     * @description
     * assuming height as portrait so 1.5 more than width
     */
    height: itemWidth * 1.5,
    width: itemWidth,
  },
  movieName: {
    color: colors.white,
    fontSize: 16,
    marginTop: respHeight(24),
    width: itemWidth,
    fontFamily: 'TitilliumWeb-Regular',
  },
});
