import React, { Component } from 'react';
import realm from '../../config/models';
import { ScrollView, ListView } from 'react-native';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { _fetchFaves } from '../../redux/modules/faves';
import { queryFaves } from '../../config/models';


import Faves from './Faves';

class FavesContainer extends Component {

  static propTypes = {
    // myProp: PropTypes.array.isRequired,
  }

  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }

  render() {
    return (
        <Faves
          faves={this.props.dataSource}
          isLoading={this.props.isLoading}
        />
    );
  }

}

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2
});



const mapStateToProps = (state) => {
    return {
      dataSource: ds.cloneWithRowsAndSections(
        state.faves.favesData.dataBlob,
        state.faves.favesData.sectionIds,
        state.faves.favesData.rowIds
      ),
      isLoading: state.faves.isLoading
    };
};

export default connect(mapStateToProps)(FavesContainer);
