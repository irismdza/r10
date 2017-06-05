import React from 'react';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';

import { goToSpeaker } from '../../lib/navigationHelpers';
import { createFave, deleteFave } from '../../config/models';

import { Platform, ScrollView, ListView, View, Image, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import PropTypes from 'prop-types';
import { colors } from '../../config/styles';
import { styles } from './styles';


      /*{
          <Icon
          name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
          size={24}
        />
      }*/
const Session = ({ sessions, speaker }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sessionLocation}>{sessions.location}</Text>

      <Text style={styles.sessionTitle}>{sessions.title}</Text>
      <Text style={styles.sessionTime}>{moment.unix(sessions.start_time).format('h:mm A')}</Text>
      <Text style={styles.sessionDescription}>{sessions.description}</Text>

      <Text style={styles.speakerInfoTitle}>Presented by:</Text>
      <Text onPress={() => goToSpeaker(speaker)} style={styles.speakerInfo}>
        <Image style={{width: 50, height: 50, borderRadius: 25}} source={{uri: speaker.image}} />
        <Text>{speaker.name}</Text>
      </Text>

      <View style={styles.buttonWrapper}>
      <LinearGradient
        colors={[colors.blue, colors.purple]}
        style={styles.faveButton}>
        <Text
          style={styles.faveButtonText}
          onPress={() => createFave(sessions.session_id)}
        >
          Add to Faves
        </Text>
      </LinearGradient>

      <LinearGradient
        colors={[colors.blue, colors.purple]}
        style={styles.faveButton}>
        <Text
          style={styles.faveButtonText}
          onPress={() => deleteFave(sessions.session_id)}
        >
          Remove from Faves
        </Text>
      </LinearGradient>
      </View>

    </View>
  );
}

Session.propTypes = {

}

export default Session;