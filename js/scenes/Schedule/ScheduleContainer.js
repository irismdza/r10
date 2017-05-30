import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import Schedule from './Schedule';

class ScheduleContainer extends Component {

  static propTypes = {
    // myProp: PropTypes.array.isRequired,
  }

  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }

  // constructor() {
  //   super();

  //   this.state = {
  //     codeConduct: [],
  //     isLoading: true
  //   };

  //   // set up empty state property to fetch code of conduct items
  // }


  render() {
    return (
        <Schedule />
    );
  }

}

export default ScheduleContainer;
