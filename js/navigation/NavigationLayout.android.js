import React, { Component } from 'react';

import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@expo/ex-navigation';

import Router from './router';

import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Ionicons';

import { colors, typography } from '../config/styles';

const defaultRouteConfig = {
  navigationBar: {
    tintColor: colors.white,
    titleStyle: {
      fontFamily: typography.fontMain
    },
    backgroundColor: colors.red
  }

};

// const width = Dimensions.get('window.').width;

// const styles = {
//   linearGradient: {
//     flex: 1,
//     paddingLeft: 15,
//     paddingRight: 15,
//   },
//   drawerItemStyles: {
//     width: 0.9 * width,
//     marginHorizontal: 5
//   }
// }

class NavigationLayout extends Component {

 static route = {
    navigationBar: {
      visible: false,
    }
  }


  renderHeader = () => {
    return (
      <View>
      </View>
    );
  };

  renderIcon(iconName, isSelected) {
    return <Icon name={iconName} size={24} color={isSelected ? colors.white : colors.mediumGrey} />
  }

  renderTitle(isSelected, title) {
    const titleStyle = {
      color: isSelected ? colors.mediumGrey : colors.lightGrey,
      fontSize: 12,
      fontFamily: typography.fontMainLight
    };
    return <Text style={titleStyle}>{title}</Text>
  }


  render() {
    return(
      <DrawerNavigation
        id="main"
        navigatorUID="main"
        initialItem="schedule"
        tabBarColor="black"
        drawerWidth={200}>

        <DrawerNavigationItem
          id="schedule"
          title="Schedule"
          renderIcon={isSelected => this.renderIcon('md-calendar', isSelected)}
          renderTitle={this.renderTitle}>
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="faves"
          title="Faves"
          renderIcon={isSelected => this.renderIcon('md-heart', isSelected)}
          renderTitle={this.renderTitle}>
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute('faves')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="about"
          title="About"
          renderIcon={isSelected => this.renderIcon('md-information-circle', isSelected)}
          renderTitle={this.renderTitle}>
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

      </DrawerNavigation>


    );
  }

}

export default NavigationLayout;