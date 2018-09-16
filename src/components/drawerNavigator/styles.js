import { StyleSheet } from 'react-native';
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
    paddingHorizontal: 10,
  },
  leftCont: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  stackIcon: {
    paddingHorizontal: 5,
    color: themeFontColor,
  },
  text: {
    color: themeFontColor,
    fontWeight: 'bold',
  },
});

export default styles;
