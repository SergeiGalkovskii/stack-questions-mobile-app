import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  grid: {
    padding: 40,
  },
  welcomeCol: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 20,
  },
  welcomeStr: {
    fontSize: 25,
  },
  inputCol: {
    justifyContent: 'space-around',
    paddingVertical: 60,
  },
  submitButtonCol: {
    alignItems: 'center',
  },
  submitButton: {
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
});

export default styles;
