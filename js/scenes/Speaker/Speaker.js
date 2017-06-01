import React from 'react';
import moment from 'moment';
import { ScrollView, ListView, View, Image, Text, TouchableHighlight } from 'react-native';

import PropTypes from 'prop-types';

const Speaker = ({ speaker }) => {
  return (
    <View>
      {console.log('speaker:', speaker)}
      <Text>Presented by: {speaker}</Text>
    </View>
  );
}

Speaker.propTypes = {

}

export default Speaker;