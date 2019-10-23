import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from './Game';
//borrar cuando lo pongamos bien
import Navbar from "./Navbar";
import { questionAnswer } from './../reducers/actions';
import { changeQuestion } from './../reducers/actions';
import { submit } from './../reducers/actions';
import { initQuestions } from './../reducers/actions';
import {View,AsyncStorage,Alert} from 'react-native';

class GameScreen extends Component {

    constructor(props){
        super(props);
        this.downloadQuestions = this.downloadQuestions.bind(this);

    }

    downloadQuestions(){
        fetch("https://quiz.dit.upm.es/api/quizzes/random10wa?token=c408be74597939371f45\"")
            .then(function(response){
                return response.json();
            })
            .then(questionsDownloaded => {
                this.props.dispatch(initQuestions(questionsDownloaded));
            });

    }


    componentDidMount(){
        this.downloadQuestions();
    }

    async loadData(){
        try{
            var storedState = await AsyncStorage.getItem('@P2_2019_IWEB:quiz');
            if (storedState !== null){
                var state = JSON.parse(storedState);
                this.props.dispatch(initQuestions(state));
                Alert.alert(
                    "Alert",
                    "Your questions have been loaded.",
                    [
                        {text:'OK',onPress:() => console.log('OK pressed')}
                    ],
                    { cancelable: false}
                );
            }else {
                Alert.alert(
                    "Alert",
                    "There are no questions saved.",
                    [
                        {text:'OK',onPress:() => console.log('OK pressed')}
                    ],
                    { cancelable: false}
                );
            }
        }catch (e) {
            console.log(e);
            Alert.alert(
                "Alert",
                "Your questions couldn't be loaded.",
                [
                    {text:'OK',onPress:() => console.log('OK pressed')}
                ],
                { cancelable: false}
            );
        }
    }

    async saveData(){
        try{
            var currentQuestions = JSON.stringify(this.props.questions);
            await AsyncStorage.setItem('@P2_2019_IWEB:quiz', currentQuestions)
                .then(
                    Alert.alert(
                        "Alert",
                        "Your questions have been saved.",
                        [
                            {text:'OK',onPress:() => console.log('OK pressed')}
                        ],
                        { cancelable: false}
                    ));
        }catch (e) {
            console.log(e);
            Alert.alert(
                "Alert",
                "Your questions couldn't be saved.",
                [
                    {text:'OK',onPress:() => console.log('OK pressed')}
                ],
                { cancelable: false}
            );
        }
    }

    async deleteData(){
        try{
            await AsyncStorage.removeItem('@P2_2019_IWEB:quiz')
                .then(
                    Alert.alert(
                        "Alert",
                        "Your questions have been deleted.",
                        [
                            {text:'OK',onPress:() => console.log('OK pressed')}
                        ],
                        { cancelable: false}
                    ));
        }catch (e) {
            console.log(e);
            Alert.alert(
                "Alert",
                "Your questions couldn't be deleted.",
                [
                    {text:'OK',onPress:() => console.log('OK pressed')}
                ],
                { cancelable: false}
            );
        }

    }


    render() {
        return (

            <View style = {{flex:1, margin:10, justifyContent:'flex-start'}}>
                <Navbar/>
                <Game currentQuestion={this.props.currentQuestion}
                      lengthQuestions={this.props.questions.length}
                      finished={this.props.finished}
                      score={this.props.score}
                      questions={this.props.questions}
                      question={this.props.questions[this.props.currentQuestion]}
                      goBack={this.props.navigation.goBack}
                      saveData={this.saveData.bind(this)}
                      loadData={this.loadData.bind(this)}
                      deleteData={this.deleteData.bind(this)}
                      onReset={()=>{
                          this.componentDidMount()
                      }}
                      onChangeQuestion={(index)=>{
                          this.props.dispatch(changeQuestion(index))
                      }}
                      onSubmit={(questions)=>{
                          this.props.dispatch(submit(questions))
                      }}
                      onQuestionAnswer={(answer)=>{
                          this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                      }}
                />
            </View>);
    }
}



function mapStateToProps(state){
    return{
        ...state
    };
}


export default connect(mapStateToProps)(GameScreen);