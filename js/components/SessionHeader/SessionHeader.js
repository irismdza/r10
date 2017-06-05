import React from 'react';
import moment from 'moment';
import { ScrollView, ListView, View, Image, Text } from 'react-native';

import PropTypes from 'prop-types';

import { styles } from './styles';

const SessionHeader = ({ time }) => {
  return (
    <View>
      <Text style={styles.sessionHeaderText}>{moment.unix(time).format('h:mm A')}</Text>
    </View>
  );
}

SessionHeader.propTypes = {

}

export default SessionHeader;