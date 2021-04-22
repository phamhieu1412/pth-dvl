import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LottieView from 'lottie-react-native';

import { navigationRef } from './RootNavigation';
import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';
import ProfileScreen from './UserScreen';
import DetaiPlacesScreen from './DetaiPlacesScreen';

import TabBarIcon from '../components/TabBarIcon';
import { Color, Styles, Languages, Images } from '../common';
import { StylesCommon } from '../common/Styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const defaultHeaderStyle = {
  headerStyle: StylesCommon.toolbar(),
  headerTintColor: Color.headerTintColor,
  headerTitleStyle: StylesCommon.headerStyle,
};

const CustomTabBarBottom = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...Styles.shadow,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  )
}

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      headerMode="float"
      screenOptions={{ ...defaultHeaderStyle, headerBackTitle: Languages.Back }}
      gestureDirection="horizontal">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: Color.white,
          borderRadius: 15,
          height: 70,
          paddingBottom: 0,
          ...Styles.shadow,
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="HomeScreen"
              imageIcon={Images._homeIcon}
              image={Images.homeIcon}
              textIcon={Languages.Home}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="A"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="A"
              imageIcon={Images._homeIcon}
              image={Images.homeIcon}
              textIcon={Languages.Categories}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="B"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <LottieView
              source={Images._plusIcon}
              autoPlay={focused}
              style={{ height: 120 }}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarBottom {...props} />
          )
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="NotificationScreen"
              imageIcon={Images._notificationIcon}
              image={Images.notificationIcon}
              textIcon={Languages.Notifications}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="ProfileScreen"
              imageIcon={Images._profileIcon}
              image={Images.profileIcon}
              textIcon={Languages.Account}
              focused={focused}
              styleProfile={{width: 35, height: 35, marginTop: -2}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

class AppNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name="App"
            component={AppStack}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="DetaiPlacesScreen"
            component={DetaiPlacesScreen}
            options={() => ({
              headerShown: false,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigator;
