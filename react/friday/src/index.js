import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

class Counter extends Component {
    render() {
        return(
            <div>
                <span>{this.props.currentCountInStore}</span>
                <button onClick={this.props.onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

// Actions

const increaseAction = {
    type: 'increase'
}

// reducer

function counter(state = {count: 0}, action) {
    switch(action.type) {
        case 'increase':
            return {
                count: state.count + 1
            }
        default:
            return state;
    }
} 

// store
const store = createStore(counter);

//Map Redux to comp props

function mapStateToProps(state) {
    return {
        currentCountInStore: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

//connect

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
