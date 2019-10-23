import React from 'react';
import {Text, StyleSheet} from 'react-native';
export default class Navbar extends React.Component {


    render() {
        return (
            <Text style={styles.header}>QUIZ GAME</Text>
        );
    }

}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 25,
        padding:10
    }
})