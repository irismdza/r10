import React, { Component } from 'react';
import { ScrollView, ListView } from 'react-native';
import PropTypes from 'prop-types';
import realm from '../../config/models';

import { connect } from 'react-redux';
import { _fetchSessions } from '../../redux/modules/sessions';
import { _fetchFaves } from '../../redux/modules/faves';

import Schedule from './Schedule';

class ScheduleContainer extends Component {

  constructor() {
    super();
    realm.addListener('change', () => {
      console.log('listening', );
      this.props.fetchSessions();
      this.props.fetchFaves();
    })
  }

  static propTypes = {
    // myProp: PropTypes.array.isRequired,
  }

  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }

  componentDidMount() {
    this.props.fetchSessions();
    this.props.fetchFaves();
  }

  render() {
    return (
      <Schedule
        sessions={this.props.dataSource}
        isLoading={this.props.isLoading}
      />
    );
  }
}

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2
});


const mapStateToProps = (state) => {
  return {
    dataSource: ds.cloneWithRowsAndSections(
      state.sessions.sessionsData.dataBlob,
      state.sessions.sessionsData.sectionIds,
      state.sessions.sessionsData.rowIds
    ),
    isSessionsLoading: state.sessions.isLoading,
    isFavesLoading: state.faves.isLoading,
    favesArray: state.faves.favesArray
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSessions() {
      dispatch(_fetchSessions())
    },
    fetchFaves() {
      dispatch(_fetchFaves())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);
