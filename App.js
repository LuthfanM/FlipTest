/**
 * M Luthfan Mursyidan
 *  @2020
 *  Flip Test
 */

import React, { Component } from 'react';
import { Container } from "native-base";

import MainScreen from './screens/MainScreen';
import LoadingScreen from './screens/LoadingScreen';

class App extends Component {

  constructor() {
    super();

    this.state = {
      data: {},
      isLoading: true
    };
  }

  async componentDidMount() {
    try {
      const Api = await fetch('https://nextar.flip.id/frontend-test');
      const jsonData = await Api.json();
      this.setState({ data: jsonData, isLoading: false });
    } catch (err) {
      console.log("Error when fetch data");
    }
  }

  render() {
    return (
    <Container>
    {
      this.state.isLoading?
      <LoadingScreen />:
      <MainScreen data={this.state.data} />
        }
    </Container>
    )
  }

}
console.disableYellowBox = true;

export default App;
