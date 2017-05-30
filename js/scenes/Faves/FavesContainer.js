import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import Faves from './Faves';

class FavesContainer extends Component {

  static propTypes = {
    // myProp: PropTypes.array.isRequired,
  }

  static route = {
    navigationBar: {
      title: 'Faves',
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
        <Faves />
    );
  }

}

export default FavesContainer;
