import { connect } from 'react-redux';
import React, { Component } from 'react';
import Container from "./Container"
import {addHero, deleteHero} from "../actions/index";


const mapStateToProps = (state) => {
  return { heroList: state.heroList }
};

const mapDispatchToProps = (dispatch) => {
  return {
      onAddHero: (heroData) => dispatch(addHero(heroData)),
      onDeleteHero: (heroData) => dispatch(deleteHero(heroData))
  }
}

var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default connectedComponent;