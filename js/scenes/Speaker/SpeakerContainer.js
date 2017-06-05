import React, { Component } from 'react';
import { Linking, ScrollView, ListView } from 'react-native';
import PropTypes from 'prop-types';
import Speaker from './Speaker';

class SpeakerContainer extends Component {

  constructor() {
    super();
  }

  static propTypes = {
    // myProp: PropTypes.array.isRequired,
  }

  handleClick = () => {
    Linking.canOpenURL(this.props.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url);
      } else {
        console.log('Cannot open URI: ' + this.props.url);
      }
    });
  };

  render() {
    return (
      <Speaker
        speaker={this.props.speakerData}
        isLoading={this.props.isLoading}
        url={this.handleClick}
      />
    );
  }
}

export default SpeakerContainer;
