import React from 'react';
import moment from 'moment';
import { ScrollView, ListView, View, Image, Text, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import { exitSpeaker } from '../../lib/navigationHelpers';
import { styles } from './styles';
import { colors } from '../../config/styles';



const Speaker = ({ speaker, openUrl }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.exitButton}>
          <Icon name='ios-close' size={35} color="white" onPress={() => exitSpeaker()}/>
        </View>
        <View style={styles.sceneTitleWrapper}>
          <Text style={styles.sceneTitle}>About the Speaker</Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <Image style={styles.speakerImage} source={{uri: speaker.image}} />
        <Text style={styles.speakerName}>{speaker.name}</Text>
        <Text style={styles.speakerBio}>{speaker.bio}</Text>

        <LinearGradient
          colors={[colors.purple, colors.blue]}
          start={{x: 0.1, y: 1}}
          end={{x: 1, y: 1.1}}
          style={styles.faveButton}>
        <Text
          style={styles.faveButtonText}
          onPress={() => openUrl(speaker.url)}
        >
          Read More on Wikipedia
        </Text>
      </LinearGradient>

      </View>
    </ScrollView>
  );
}

Speaker.propTypes = {

}

export default Speaker;