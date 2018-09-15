import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  inputContainer: {
    padding: 20,
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 0.1,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  input: {
    flex: 0.9,
    paddingHorizontal: 4,
    paddingVertical: 5,
    height: 35,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default styles;
