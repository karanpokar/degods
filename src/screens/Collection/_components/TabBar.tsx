import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CollectionList from '../_components/CollectionList';
import BookmarkList from '../_components/BookmarkList';
import CustomTabBarLabel from './CustomLabel';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../../utils/theme';
import About from './About';
const Tab = createMaterialTopTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
    
    screenOptions={({ route }) => ({
        tabBarLabel: ({ focused, color }) => {
          const label = route.name;
          return <CustomTabBarLabel label={label}/>
        },
        tabBarStyle: { backgroundColor: colors.primaryBackground },
      })}
    >
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="NFTs" component={CollectionList} />
      <Tab.Screen name="Bookmarks" component={BookmarkList} />
    </Tab.Navigator>
  )
}

export default TabBar