import React from 'react';
import MyButton from './MyButton.js';
import Navbar from "./Navbar";
import {View,StyleSheet,Text} from 'react-native';

export default class InitialScreen extends React.Component {

render() {
    return(
        <View style={styles.content}>
            <Navbar/>
            <MyButton
                on press={() =>this.props.navigation.navigate('GameScreen')}
                text={"Play"}/>

        </View>
    );
}
}
const styles = StyleSheet.create({
    content:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#87CEEB'
    },
    text:{
        fontSize: 25,
        color: '#2e31ff',
    }
});