import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {respHeight} from '../../utils/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  navBarImg: {
    position: 'absolute',
    // 192 total - 36 margin = 156
    top: respHeight(156),
    height: respHeight(36),
    alignSelf: 'center',
    width: '100%',
    zIndex: 2,
  },
  contentContainer: {
    paddingTop: respHeight(36),
    zIndex: 1,
  },
});
