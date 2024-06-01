import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {AppFonts, FontSizes} from '../../utils/fontUtils';
import {respHeight} from '../../utils/utils';

export const styles = StyleSheet.create({
  mainView: {
    marginBottom: respHeight(90),
  },
  movieName: {
    color: colors.white,
    fontSize: FontSizes.regular,
    marginTop: respHeight(24),
    fontFamily: AppFonts.regular,
  },
});
