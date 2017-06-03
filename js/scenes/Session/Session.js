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
    fontSize: 16,
    backgroundColor: 'transparent',
  },
  removeFaveBtn: {
    width: 200,
    height: 30,
    borderRadius: 25
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

      <Text onPress={() => goToSpeaker(speaker)}>Presented by:
      <Image style={{width: 50, height: 50, borderRadius: 25}} source={{uri: speaker.image}} />
      <Text>{speaker.name}</Text>
      </Text>

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