import * as React from "react";
import { Text, DeckSwiper, Card, CardItem, Body } from "native-base";
import { isEqual } from "lodash";
import styles from "./styles";

export class CardsComponent extends React.Component {
  mapWords = item => {
    return {
      name: item.translate,
      text: item.word
    };
  };

  renderCardItem = item => {
    return (
      <Card style={styles.card}>
        <CardItem disabled={true}>
          <Body style={styles.cardBody}>
            <Text style={styles.cardText}>{item.text}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  };

  shouldComponentUpdate(nextProps) {
    return !isEqual(nextProps.data, this.props.data);
  }

  render() {
    const { data } = this.props;
    return (
      <DeckSwiper
        ref={c => (this._deckSwiper = c)}
        dataSource={data.map(this.mapWords)}
        renderItem={item => this.renderCardItem(item)}
      />
    );
  }
}
