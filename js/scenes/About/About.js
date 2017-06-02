import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';

import PropTypes from 'prop-types';

import ConductItem from '../../components/ConductItem';
import { styles } from './styles';

const About = ({ codes }) => {
  return (
    <View>
      <Image source={require('../../assets/images/r10_logo.png')} />
      <Text>R10 is a conference that focuses on just about any topic related to dev.</Text>
      <Text>Date & Venue</Text>
      <Text>The R10 conference will take place on Tuesday, June 27 in Vancouver, BC.</Text>
      <Text>Code of Conduct</Text>
    </View>
  );
}

About.propTypes = {

}

export default About;