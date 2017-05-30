import React, { Component } from 'react';

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';

import Router from './router';

import { Text } from 'react-native';
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

class NavigationLayout extends Component {

 static route = {
    navigationBar: {
      visible: false,
    }
  }

  renderIcon(iconName, isSelected) {
    return <Icon name={iconName} size={24} color={isSelected ? colors.white : colors.mediumGrey} />
  }

  renderTitle(isSelected, title) {
    const titleStyle = {
      color: isSelected ? colors.white : colors.mediumGrey,
      fontSize: 12,
      fontFamily: typography.fontMainLight
    };
    return <Text style={titleStyle}>{title}</Text>
  }

  render() {
    return(
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="about"
        tabBarColor="black">

        <TabItem
          id="schedule"
          title="Schedule"
          renderIcon={isSelected => this.renderIcon('ios-calendar', isSelected)}
          renderTitle={this.renderTitle}>
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="faves"
          title="Faves"
          renderIcon={isSelected => this.renderIcon('ios-heart', isSelected)}
          renderTitle={this.renderTitle}>
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute('faves')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="about"
          title="About"
          renderIcon={isSelected => this.renderIcon('ios-information-circle', isSelected)}
          renderTitle={this.renderTitle}>
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>

      </TabNavigation>


    );
  }

}

export default NavigationLayout;