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

  handleClick = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log('Cannot open URI: ' + url);
      }
    });
  };

  render() {
    return (
      <Speaker
        speaker={this.props.speakerData}
        isLoading={this.props.isLoading}
        openUrl={this.handleClick}
      />
    );
  }
}

export default SpeakerContainer;
