import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import ConductItem from '../../components/ConductItem';
import { styles } from './styles';

const About = ({ codes }) => {
  return (
    <View>
      <View style={styles.headerLogo}>
        <Image
          source={require('../../assets/images/r10_logo.png')}
        />
      </View>
      <Text style={styles.baseText}>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text style={styles.titleText}>
        Date & Venue
      </Text>
      <Text style={styles.baseText}>
        The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC.
      </Text>
      <Text style={styles.titleText}>
        Code of Conduct
      </Text>
    </View>
  );
}

About.propTypes = {

}

export default About;