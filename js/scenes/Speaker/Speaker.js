import React from 'react';
import moment from 'moment';
import { ScrollView, ListView, View, Image, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import { exitSpeaker } from '../../lib/navigationHelpers';
import { styles } from './styles';


const Speaker = ({ speaker, url }) => {
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
      </View>
      <Text url={speaker.url}>Read More</Text>
    </ScrollView>
  );
}

Speaker.propTypes = {

}

export default Speaker;