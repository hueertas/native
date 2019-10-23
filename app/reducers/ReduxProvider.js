import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';
import React from 'react';
import App from '../App';
import{createAppContainer} from 'react-navigation';
import  {createStackNavigator} from 'react-navigation-stack' ;
import InicialScreen from './InicialScreen';
import GameScreen from './GameScreen';

const AppNavigator = createStackNavigator({
    InicialScreen: { screen: InicialScreen },
    GameScreen: { screen: GameScreen }
},{
    initialRouteName: "InicialScreen",
    headerMode: 'none'
})
const AppContainer = createAppContainer(AppNavigator);
//puente entre React y Redux


export default class ReduxProvider extends React.Component {
    constructor(props){
        super(props);
        this.initialState = {
            score: 0,
            finished: false,
            currentQuestion: 0,
            questions: [  ]
        }
        this.store = this.configureStore();
    }
    //Este código inicializa un store de Redux con el
    // estado inicial indicado
    //ESTADOS DE LA APLICACION QUE QUE MODICAN CON REDUCERS
    // score: 0, -->PUNTUACION
    //  finished: false,--> INDICA CUANDO LE DAS A
    //  SUBMIT SI HA TERMINADO EL JUEGO

    //currentQuestion: 0, --> CUENTA DE LAS PREGUNTAS
    // questions: [ ...questions ] -->PREGUNTAS DEL QUIZ
    render(){

        return(
            <Provider store={this.store}>
                <div style={{height: '100%'}}>
                    <App store={this.store} />>
                </div>
                <AppContainer/>
            </Provider>
        );
    }

    configureStore(){
        return createStore(GlobalState, this.initialState);

    }
}
