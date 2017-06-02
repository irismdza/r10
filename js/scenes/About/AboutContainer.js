import React, { Component } from 'react';

import { ActivityIndicator, ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';

import About from './About';
import ConductItem from '../../components/ConductItem';

import { connect } from 'react-redux';
import { _fetchConduct } from '../../redux/modules/conduct';

class AboutContainer extends Component {

  static propTypes = {
    // myProp: PropTypes.array.isRequired,
  }

  static route = {
    navigationBar: {
      title: 'About',
    }
  }

  constructor() {
    super();

    this.state = {
      codeConduct: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.props.dispatch(_fetchConduct());
  }

  componentDidUpate() {
    if ( this.props.conduct && this.state.isLoading ) {
      this.setState({ isLoading: false, });
    }
  }

  render() {
    return (
      // if (this.state.isLoading) {
      //   <ActivityIndicator />
      // }
      <ScrollView>
        <About codes={this.props.conduct.conductData} />
        <ConductItem codes={this.props.conduct.conductData} />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        conduct: state.conduct,
    };
};

export default connect(mapStateToProps)(AboutContainer);