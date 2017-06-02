import React from 'react';
import { ScrollView, ListView, View, Image, Text } from 'react-native';

import PropTypes from 'prop-types';

import SessionListItem from '../../components/SessionListItem';
import SessionHeader from '../../components/SessionHeader';

import { styles } from './styles';

const Faves = ({ faves }) => {
  return (
    <ListView
        dataSource={faves}
        renderRow={(rowData) =>
          <SessionListItem
            currentNavigatorUID="faves"
            rowData={rowData}
          />
        }

        renderSectionHeader={(sectionData, time) => <SessionHeader time={time} />}
    />
  );
}

Faves.propTypes = {

}

export default Faves;