import { connect } from "react-redux";
import App from "App.js";
import addHero from "../actions/addHero";
import deleteHero from "../actions/deleteHero"

function mapStateToProps(state) {
    return{
        heroList: state.heroList
    }
}

function mapDispatchToProps(dispatch) {
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

var App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;