import React from 'react';
import moment from 'moment';
import { ScrollView, ListView, View, Image, Text } from 'react-native';

import PropTypes from 'prop-types';

const SessionHeader = ({ time }) => {
  return (
    <View>
      <Text>{moment.unix(time).format('h:mm A')}</Text>
    </View>
  );
}

SessionHeader.propTypes = {

}

export default SessionHeader;