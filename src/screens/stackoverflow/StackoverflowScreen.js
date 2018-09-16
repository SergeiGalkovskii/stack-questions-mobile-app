import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, FlatList, ActivityIndicator, View } from 'react-native';
import { Content, Col } from 'native-base';
import { connect } from 'react-redux';
import { getStackQuestionsDataAction } from '../../store/actions';
import WrapperDrawerItemComponent from '../../components/wrapperDrawerItem/WrapperDrawerItemComponent';
import styles from './styles';

const screenTitle = 'StackOverFlow';
@connect(
  state => ({
    dataState: state.stack,
  }),
  dispatch => ({
    onGetData: () => dispatch(getStackQuestionsDataAction()),
  })
)
class StackoverflowScreen extends Component {
  componentDidMount() {
    this.props.onGetData();
  }

  renderItem = ({ item }) => (
    <Col style={styles.listItem}>
      <Text numberOfLines={1}>{item.title}</Text>
    </Col>
  );

  renderSeparator = () => (
    <Col style={styles.listSeparator} size={1} />
  );

  render() {
    const {
      dataState,
    } = this.props;

    if (dataState.isLoading) {
      return (
        <View style={styles.containerLoader}>
          <ActivityIndicator size="small" />
        </View>);
    }

    return (
      <WrapperDrawerItemComponent title={screenTitle}>
        <Content>
          <FlatList
            data={dataState.data}
            keyExtractor={item => item.title}
            renderItem={this.renderItem}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </Content>
      </WrapperDrawerItemComponent>
    );
  }
}

StackoverflowScreen.propTypes = {
  dataState: PropTypes.object,
  onGetData: PropTypes.func,
};

export default StackoverflowScreen;
