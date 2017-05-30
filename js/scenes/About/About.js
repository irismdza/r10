import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';

import PropTypes from 'prop-types';

import { styles } from './styles';

const About = ({ codes }) => {
  return (
    <ScrollView>
      <Image source={require('../../assets/images/r10_logo.png')} />
      {codes.map((code, index) => (
          <View key={index}>
            <Text style={styles.conductTitle}>{code.title}</Text>
            <Text>{code.description}</Text>
          </View>
      ))}
    </ScrollView>
  );
}

About.propTypes = {

}

export default About;