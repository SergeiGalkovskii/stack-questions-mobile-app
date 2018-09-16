import { StyleSheet, Platform } from 'react-native';
import { themeFontColor } from '../../assets/styles';

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  header: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingBottom: Platform.OS === 'ios' ? 10 : 0,
  },
  leftCont: {
    paddingHorizontal: Platform.OS === 'ios' ? 10 : 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: 5,
  },
  stackIcon: {
    color: themeFontColor,
    height: Platform.OS === 'ios' ? 30 : 'auto',
    marginRight: 5,
  },
  text: {
    color: themeFontColor,
    width: 80,
    fontWeight: 'bold',
  },
});

export default styles;
