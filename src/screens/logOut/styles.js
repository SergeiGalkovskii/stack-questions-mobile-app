import { StyleSheet } from 'react-native';
import { themeColor } from '../../assets/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 100,
  },
  text: {
    fontSize: 26,
  },
  buttonCol: {
    paddingVertical: 50,
  },
  button: {
    backgroundColor: themeColor,
    paddingHorizontal: 15,
  },
});

export default styles;
