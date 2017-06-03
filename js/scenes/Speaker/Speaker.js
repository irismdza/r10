import React from 'react';
import moment from 'moment';
import { ScrollView, ListView, View, Image, Text, TouchableHighlight } from 'react-native';

import PropTypes from 'prop-types';

import { exitSpeaker } from '../../lib/navigationHelpers';

const Speaker = ({ speaker }) => {
  console.log('hi', exitSpeaker)
  return (
    <View>
      <Text style={{ fontSize: 50 }} onPress={() => exitSpeaker()}>EXIT SPEAKER!!!!!!!!!!!!!!!!!!!!!!!!</Text>
      <Image style={{width: 50, height: 50, borderRadius: 25}} source={{uri: speaker.image}} />
      <Text>{speaker.name}</Text>
      <Text>{speaker.bio}</Text>
    </View>
  );
}

Speaker.propTypes = {

}

export default Speaker;