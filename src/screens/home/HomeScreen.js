import React, { Component } from "react";
import {} from "react-native";
import { Container, Button, Text, View, Icon, Fab, Toast } from "native-base";
import { connect } from "react-redux";
import { ActivityIndicator } from "react-native";
import WrapperDrawerItemComponent from "../../components/wrapperDrawerItem/WrapperDrawerItemComponent";
import { getWordsAction } from "../../store/actions/words";
import styles from "./styles";
import { shuffle } from "lodash";
import { CardsComponent } from "./CardsComponent";
const screenTitle = "Home";

@connect(
  state => ({
    userName: state.auth.userName,
    wordsState: state.words
  }),
  dispatch => ({
    onGetWords: quantity => dispatch(getWordsAction(quantity))
  })
)
class HomeScreen extends Component {
  childRef;

  state = {
    isFabActive: false,
    buttonOptions: []
  };

  componentDidMount() {
    this.props.onGetWords(10);
  }

  onPressAnswer = (allItems, pressedItem) => {
    if (
      pressedItem.translate ===
      this.childRef._deckSwiper._root.state.selectedItem.name
    ) {
      Toast.show({
        text: "It's wright:)",
        type: "success",
        duration: 500
      });
    } else {
      Toast.show({
        text: "It's wrong:(",
        type: "danger",
        duration: 500
      });
    }
    const nextItemIndex = allItems.findIndex(
      item =>
        item.word === this.childRef._deckSwiper._root.state.selectedItem2.text
    );
    const nextItem = allItems[nextItemIndex];
    console.log('nextItem',nextItem.translate)
    const buttonOptions = shuffle(
      allItems.filter(item => item.word !== nextItem.word)
    )
      .slice(0, 2)
      .concat([nextItem]);
    this.childRef._deckSwiper._root.swipeLeft();
    this.setState({ buttonOptions });
  };

  renderButtons = (items, options) => {
    let mapItems;

    if (options.length > 0) {
      mapItems = options;
    } else {
      mapItems = items.slice(0, 3);
    }

    return shuffle(mapItems).map((item, i) => {
      return (
        <View style={styles.buttonView} key={i}>
          <Button
            bordered
            style={styles.button}
            onPress={() => this.onPressAnswer(items, item)}
          >
            <Text>{item.translate}</Text>
          </Button>
        </View>
      );
    });
  };

  render() {
    const { data, isLoading } = this.props.wordsState;

    if (isLoading) {
      return (
        <View style={styles.containerLoader}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <WrapperDrawerItemComponent title={screenTitle}>
        <Container style={styles.container}>
          <View style={styles.deckSwiperContainer} pointerEvents="none">
            <CardsComponent
              data={data}
              ref={node => {
                this.childRef = node;
              }}
            />
          </View>
          <View style={styles.buttonsContainer}>
            {this.renderButtons(data, this.state.buttonOptions)}
          </View>
          <Fab
            direction="up"
            active={this.state.isFabActive}
            style={styles.fab}
            onPress={() =>
              this.setState({ isFabActive: !this.state.isFabActive })
            }
          >
            <Icon type="Entypo" name="dots-three-horizontal" />
            <Button style={styles.pencilBut}>
              <Icon type="Entypo" name="pencil" />
            </Button>
          </Fab>
        </Container>
      </WrapperDrawerItemComponent>
    );
  }
}

export default HomeScreen;
