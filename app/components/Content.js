import React from 'react';
import {View, Image, Text, TextInput, StyleSheet} from 'react-native';

export default class Content extends React.Component {


    render() {
        if(this.props.question === undefined){
            return(
                <Text>Cargando</Text>
            );
        } else {
            return (
                <View style={{flex:1}}>
                    <Image style={{flex:5}} source={{uri: this.props.question.attachment.url}}/>
                    <Text >{this.props.question.question}</Text>
                    <TextInput style={{flex:1}} value={this.props.question.userAnswer || ""} placeholder="Escribe tu respuesta" type="text"
                               onChangeText={(e)=>{this.props.onQuestionAnswer(e);
                               }}/>
                    <View style={{flex:3}}>
                        <Text>Tips:</Text>
                        {this.props.question.tips.length === 0 ?
                            <Text>{"No tips"}</Text>:this.props.question.tips.map(function(t){ return <Text>{t}</Text>;})}
                    </View>
                </View>

            );
        }

    }
}
