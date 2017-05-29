import React, { Component } from 'react';
import PropTypes from 'prop-types';

import About from './About';

class AboutContainer extends Component {

  static propTypes = {
    // myProp: PropTypes.array.isRequired,
  }

  constructor() {
    super();
    // set up empty state property to fetch code of conduct items
  }

  componentDidMount() {

  }

  componentDidUpate() {

  }

  render() {
    return (
      <About />
    );
  }

}

export default AboutContainer;
