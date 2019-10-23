import React from 'react';
//IMPORTAR ACTIONBAR
import Content from "./Content";
import {TouchableHiglight, View, Text, StyleSheet} from 'react-native';

export default class Game extends React.Component {


    render() {

        if (this.props.finished===false){
            return (
                <View style={{flex:1, justifyContent:"flex-start"}}>
                    <Content question={this.props.question}
                             onQuestionAnswer={this.props.onQuestionAnswer} />

                </View>
            );

        } else {
            /*  return(
                <View>
                  <Text style={styles.congrats}>Congratulations! You have finished the quiz
                  </Text>
                  <Text style={styles.score}>SCORE: {this.props.score}</Text>
                //boton de reset falta
                 </View>
              );*/
        }
    }

}

const styles = StyleSheet.create({
    congrats:{
        //rellenar con el estilo que sea
        textAlign:'center',
        fontSize: 25
    },
    score:{
        textAlign:'center',
        fontSize: 38
        //rellenar con estilo
    }
})