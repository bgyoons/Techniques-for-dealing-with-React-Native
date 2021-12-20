import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedsScreen from './FeedsScreen';
import CalendarScreen from './CalendarScreen';
import SearchScreen from './SearchScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#F05454',
          tabBarIcon: ({color, size}) => (
            <Icon name="view-stream" size={size} color={color} />
          ),
        }}
        name="Feeds"
        component={FeedsScreen}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#F05454',
          tabBarIcon: ({color, size}) => (
            <Icon name="event" size={size} color={color} />
          ),
        }}
        name="Calendar"
        component={CalendarScreen}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#F05454',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
        name="Search"
        component={SearchScreen}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
