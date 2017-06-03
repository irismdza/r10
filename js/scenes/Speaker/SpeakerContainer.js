import React, { Component } from 'react';
import { ScrollView, ListView } from 'react-native';
import PropTypes from 'prop-types';
import Speaker from './Speaker';

class SpeakerContainer extends Component {

  static propTypes = {
    // myProp: PropTypes.array.isRequired,
  }

  // static route = {
  //   navigationBar: {
  //     title: 'Speaker',
  //     tintColor: 'white',
  //     backgroundColor: 'black'
  //   }
  // }


  render() {
    return (
      <Speaker
        speaker={this.props.speakerData}
        isLoading={this.props.isLoading}
      />
    );
  }

}

export default SpeakerContainer;
