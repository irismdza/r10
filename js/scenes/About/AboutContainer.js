import React, { Component } from 'react';

import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import About from './About';

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

    // set up empty state property to fetch code of conduct items
  }

  componentDidMount() {
    this.props.dispatch(_fetchConduct());
  }

  //   // let endpoint = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';
  //   // fetch(endpoint)
  //   //   // if fetch is successful, read our JSON out of the response
  //   //   .then((response) => response.json())
  //   //   .then((result) => {
  //   //     this.setState({ codeConduct: result });
  //   //   })
  //   //   .catch(error => console.log(`Error fetching JSON: ${error}`));
  // }

  componentDidUpate() {
    if ( this.props.conduct && this.state.isLoading ) {
      this.setState({ isLoading: false, });
    }
  }

  render() {
    if (this.state.isLoading) {
      <ActivityIndicator
        size="large"
        color="red"
      />
    }
    return (
        // <ScrollView>
        <About
          codes={this.props.conduct.conductData}
        />
        // </ScrollView>
    );
  }

}

const mapStateToProps = (state) => {
    return {
        conduct: state.conduct,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return dispatch(_fetchConduct)
// };

export default connect(mapStateToProps)(AboutContainer);