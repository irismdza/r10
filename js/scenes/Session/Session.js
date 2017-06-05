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
    <ScrollView style={styles.container}>
      <Text style={styles.sessionLocation}>{sessions.location}</Text>

      <Text style={styles.sessionTitle}>{sessions.title}</Text>
      <Text style={styles.sessionTime}>{moment.unix(sessions.start_time).format('h:mm A')}</Text>
      <Text style={styles.sessionDescription}>{sessions.description}</Text>

      <Text style={styles.speakerInfoHeading}>Presented by:</Text>
      <View style={styles.speakerInfoWrapper}>
        <Image style={{width: 50, height: 50, borderRadius: 25}} source={{uri: speaker.image}} />
        <Text onPress={() => goToSpeaker(speaker)} style={styles.speakerName}>{speaker.name}</Text>
      </View>

      <View style={styles.buttonWrapper}>
      <LinearGradient
        colors={[colors.purple, colors.blue]}
        start={{x: 0.1, y: 1}}
        end={{x: 1, y: 1.1}}
        style={styles.faveButton}>
        <Text
          style={styles.faveButtonText}
          onPress={() => createFave(sessions.session_id)}
        >
          Add to Faves
        </Text>
      </LinearGradient>

      <LinearGradient
        colors={[colors.purple, colors.blue]}
        start={{x: 0.1, y: 1}}
        end={{x: 1, y: 1.1}}
        style={styles.faveButton}>
        <Text
          style={styles.faveButtonText}
          onPress={() => deleteFave(sessions.session_id)}
        >
          Remove from Faves
        </Text>
      </LinearGradient>
      </View>

    </ScrollView>
  );
}

Session.propTypes = {

}

export default Session;