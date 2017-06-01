import React from 'react';
import { ScrollView, ListView, View, Image, Text } from 'react-native';

import PropTypes from 'prop-types';

import SessionListItem from '../../components/SessionListItem';
import SessionHeader from '../../components/SessionHeader';

import { styles } from './styles';

const Schedule = ({ isLoading, sessions }) => {
  return (
    <ListView
        dataSource={sessions}
        renderRow={(rowData) =>
          <SessionListItem
            currentNavigatorUID="schedule"
            rowData={rowData}
          />
        }
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        renderSectionHeader={(sectionData, time) => <SessionHeader time={time} />}
    />
  );
}

Schedule.propTypes = {

}

export default Schedule;