import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {respHeight, respSize} from '../../utils/utils';

export const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: respSize(30),
    zIndex: 3,
    height: respHeight(156),
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
    fontSize: respSize(18),
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
