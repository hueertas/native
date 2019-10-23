import MyButton from "./MyButton";
import {View, Text, StyleSheet, TouchableHiglight} from 'react-native';

export default class Actionbar extends React.Component {

    render() {
        return (

            <View>
                <MyButton lengthQuestions={this.props.lengthQuestions}
                          currentQuestion={this.props.currentQuestion}
                          onChangeQuestion={this.props.onChangeQuestion}
                          onSubmit={this.props.onSubmit}
                          questions={this.props.questions}
                          name="Submit"/>
                <MyButton lengthQuestions={this.props.lengthQuestions}
                          currentQuestion={this.props.currentQuestion}
                          onChangeQuestion={this.props.onChangeQuestion}
                          onSubmit={this.props.onSubmit}
                          questions={this.props.questions}
                          name="Previous"/>
                <MyButton lengthQuestions={this.props.lengthQuestions}
                          currentQuestion={this.props.currentQuestion}
                          onChangeQuestion={this.props.onChangeQuestion}
                          onSubmit={this.props.onSubmit}
                          questions={this.props.questions}
                          name="Next"/>
                <MyButton name="Reset" onReset={this.props.onReset}/>


            </View>

        );
    }
}

const styles = StyleSheet.create({
    positionButton:{
        flex:1,
        margin:10,
        justifyContent:'center'
    }
})
