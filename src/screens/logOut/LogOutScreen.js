import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Text, Col } from 'native-base';
import { withNavigation } from 'react-navigation';
import WrapperNavigatorItemComponent from '../../components/wrapperNavigatorItem/WrapperNavigatorItemComponent';
import styles from './styles';

const screenTitle = 'Log Out';

class LogOutScreen extends Component {
    static navigationOptions = {
        title: 'Log Out',
    };

    onClickButton = () => {
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <WrapperNavigatorItemComponent title={screenTitle}>
                <Grid style={styles.container}>
                    <Text style={styles.text}>Good Bye</Text>
                    <Col style={styles.buttonCol}>
                        <Button primary style={styles.button} onPress={this.onClickButton}>
                            <Text>Log Out</Text>
                        </Button>
                    </Col>
                </Grid>
            </WrapperNavigatorItemComponent>
        );
    }
}

LogOutScreen.propTypes = {
    navigation: PropTypes.object,
};

export default withNavigation(LogOutScreen);
