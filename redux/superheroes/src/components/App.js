import { connect } from 'react-redux';
import Container from "./Container"
import {addHero, deleteHero, fetchHero, addToCart, deleteFromCart} from "../actions/index";


const mapStateToProps = (state) => {
  return { heroList: state.heroList,
            cart: state.cart,
            total: state.total
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      onAddHero: (heroData) => dispatch(addHero(heroData)),
      onDeleteHero: (heroData) => dispatch(deleteHero(heroData)),
      onFetch: (heroData) => dispatch(fetchHero(heroData)),
      onAddToCart: (heroData) => dispatch(addToCart(heroData)),
      onDeleteFromCart: (heroData) => dispatch(deleteFromCart(heroData))
  }
}

var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default connectedComponent;