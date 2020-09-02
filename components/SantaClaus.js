import React from 'react';
import LottieView from 'lottie-react-native';

export default class SantaAnimation extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../assets/Watermelon.json')}
      // source={require('../assets/lf20_4pP1ll.json')}
      // source={require('https://assets3.lottiefiles.com/packages/lf20_4pP1ll.json')}
      style={{width:"60%"}}
      autoPlay loop />
    )
  }
}

