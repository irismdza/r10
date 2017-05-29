import React from 'react';
import { View, Text } from 'react-native';

import PropTypes from 'prop-types';

import { styles } from './styles';

const About = () => {
  return (
    <View style={styles.container}>
      <Text>Hello this is the about scene!</Text>
    </View>
  );
}

About.propTypes = {

}

export default About;