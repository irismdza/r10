import React from 'react';
import { ScrollView, ListView, View, Image, Text, TouchableHighlight } from 'react-native';

import PropTypes from 'prop-types';
import { styles } from './styles';

const ConductItem = ({ codes }) => {
  return (
    <View>
      {codes.map((code, index) => (
        <View key={index}>
          <Text style={styles.conductTitle}>{code.title}</Text>
          <Text>{code.description}</Text>
        </View>
      ))}
    </View>
  );
}

ConductItem.propTypes = {

}

export default ConductItem;