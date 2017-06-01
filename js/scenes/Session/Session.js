import React from 'react';
import moment from 'moment';

import { goToSpeaker } from '../../lib/navigationHelpers';
import { Platform, ScrollView, ListView, View, Image, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import PropTypes from 'prop-types';

const Session = ({ sessions, speaker }) => {
  return (
    <View>
      {console.log('sessions:', sessions, 'speaker:', speaker)}
      <Text>{sessions.location}</Text>
      <Icon
        name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
        size={24}
      />
      <Text>{sessions.title}</Text>
      <Text>{moment.unix(sessions.start_time).format('h:mm A')}</Text>
      <Text>{sessions.description}</Text>
      <Text onPress={() => goToSpeaker(sessions.speaker)}>Presented by: {speaker.name}</Text>
    </View>
  );
}

Session.propTypes = {

}

export default Session;