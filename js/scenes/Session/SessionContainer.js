import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ScrollView, ListView } from 'react-native';
import PropTypes from 'prop-types';
import Session from './Session';
import { _fetchSpeaker } from '../../redux/modules/speakers';

class SessionContainer extends Component {

  static propTypes = {
    // myProp: PropTypes.array.isRequired,
  }

  static route = {
    navigationBar: {
      title: 'Session',
    }
  }

  componentDidMount() {
    this.props.fetchSpeaker(this.props.sessionData.speaker);
  }

  render() {
    return (
      <Session
        sessions={this.props.sessionData}
        speaker={this.props.speaker}
        isLoading={this.props.isLoading}
        faves={this.props.faves}
      />
    );
  }

}

const mapStateToProps = (state) => {
    return {
      speaker: state.speaker.speakerData,
      faves: state.faves.favesArray
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      fetchSpeaker( speakerId ) {
        dispatch(_fetchSpeaker( speakerId ))
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionContainer);
