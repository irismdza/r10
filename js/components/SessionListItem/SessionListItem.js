import React from 'react';
import { ScrollView, ListView, View, Image, Text, TouchableHighlight } from 'react-native';

import { goToSession } from '../../lib/navigationHelpers';

import PropTypes from 'prop-types';

const SessionListItem = ({ currentNavigatorUID, rowData }) => {
  return (
    <TouchableHighlight
      onPress={() => goToSession(currentNavigatorUID, rowData)}
      underlayColor={"rgb(235,235,235)"}>
      <View>
        <Text>{rowData.title}</Text>
        <Text>{rowData.location}</Text>
      </View>
    </TouchableHighlight>
  );
}

SessionListItem.propTypes = {

}

export default SessionListItem;