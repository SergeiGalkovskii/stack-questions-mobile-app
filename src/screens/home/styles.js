import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    paddingVertical: 80,
    paddingHorizontal: 20,
    position: 'relative'
  },
  deckSwiperContainer: {
    padding: 40,
    flex: 1,
    justifyContent: "flex-start"
  },
  buttonsContainer: {
    flex: 3,
    alignItems: "center"
  },
  text: {
    fontSize: 21
  },
  buttonView: {
    padding: 20
  },
  button: {
    justifyContent: "center",
    width: 200
  },
  fab: {
    backgroundColor: "#5067FF"
  },
  pencilBut: {
    backgroundColor: "#34A34F"
  },
  card: {
    elevation: 3
  },
  cardBody: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  cardText: {
    textAlign: "center"
  },
  containerLoader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
