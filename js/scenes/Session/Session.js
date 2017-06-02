import React from 'react';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';

import { goToSpeaker } from '../../lib/navigationHelpers';
import { createFave, deleteFave } from '../../config/models';

import { Platform, ScrollView, ListView, View, Image, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, typography } from '../../config/styles';

import PropTypes from 'prop-types';

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  removeFaveTxt: {
    color: 'white',
    fontSize: 12,
    backgroundColor: 'transparent',
    height: 100,
    width: 200
  },
  removeFaveBtn: {
    width: 200,
    height: 100
  },
});


const Session = ({ sessions, speaker }) => {
  return (
    <View>
      <Text>{sessions.location}</Text>
      <Icon
        onPress={() => createFave(sessions.session_id)}
        name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
        size={24}
      />
      <Text>{sessions.title}</Text>
      <Text>{moment.unix(sessions.start_time).format('h:mm A')}</Text>
      <Text>{sessions.description}</Text>

      <Text onPress={() => goToSpeaker(sessions.speaker)}>Presented by: {speaker.name}</Text>

      <LinearGradient
        colors={[colors.blue, colors.purple]}
        style={styles.removeFaveBtn}>
        <Text
          style={styles.removeFaveTxt}
          onPress={() => deleteFave(sessions.session_id)}
        >
          Remove from Faves
        </Text>
      </LinearGradient>
    </View>
  );
}

Session.propTypes = {

}

export default Session;