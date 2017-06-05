import React, { Component } from 'react';
import { ScrollView, ListView, View, Image, Text, TouchableHighlight, LayoutAnimation } from 'react-native';

import PropTypes from 'prop-types';
import { styles } from './styles';

class ConductItem extends Component {

  constructor() {
    super();
    this.state = {
      expanded: false,
    }
  }

  onPress = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({expanded: !this.state.expanded});
  };

  render() {
    return (
      <View>
        <Text
          onPress={this.onPress}
          style={styles.conductTitle}>
          + {this.props.code.title}
        </Text>

        { this.state.expanded &&
          <Text style={styles.conductText}>
            {this.props.code.description}
          </Text>
        }
      </View>
    );
  }
}

ConductItem.propTypes = {

}

export default ConductItem;