import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/Navigation/HomeScreen';
import NotificationsScreen from './src/Navigation/NotificationsScreen';
import Post from './src/Navigation/Post';
const Drawer = createDrawerNavigator();
import {SearchBar, Icon} from 'react-native-elements';
import Search from './src/screen/Search';
const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="post" component={Post} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="search" component={Search} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
