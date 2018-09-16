import { StyleSheet } from 'react-native';
import { themeColor } from '../../assets/styles';

const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: 45,
    paddingVertical: 20,
  },
  welcomeCol: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  welcomeStr: {
    fontSize: 25,
  },
  inputRow: {
    marginBottom: 40,
  },
  inputCol: {
    justifyContent: 'center',
    paddingVertical: 42,
  },
  inputUserName: {
    marginBottom: 10,
  },
  submitButtonCol: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    color: themeColor,
  },
  submitButton: {
    backgroundColor: themeColor,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
});

export default styles;
