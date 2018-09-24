import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from "react-redux";
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux";
import { heroReducer } from "./reducers/heroReducer";
import addHero from "./actions/addHero";
import deleteHero from "./actions/deleteHero"

var store = createStore(heroReducer);

let mapStateToProps = (state) => {
    return{
        heroList: state.heroList
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddHero: (heroData) => dispatch({
            type: 'addHero',
            heroData: heroData
        }),
        onDeleteHero: (heroData) => dispatch({
            type: 'deleteHero',
            heroData: heroData
        })
    }
}

connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();

