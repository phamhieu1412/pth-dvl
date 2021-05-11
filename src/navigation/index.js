import React from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';

import { navigationRef } from './RootNavigation';
import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';
import ProfileScreen from './ProfileScreen';
import DetaiPlacesScreen from './DetaiPlacesScreen';

import { DrawerContent } from '../components';
import { Color, Styles, Languages, Images } from '../common';

const Drawer = createDrawerNavigator();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Drawer.Navigator
          drawerContent={props => <DrawerContent {...props} />}
          drawerContentOptions={{ activeBackgroundColor: '#5cbbff', activeTintColor: 'red' }}
        >
          <Drawer.Screen name="HomeScreen" component={HomeScreen} />
          <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
          <Drawer.Screen name="DetaiPlacesScreen" component={DetaiPlacesScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
  // return (
  //   <PaperProvider theme={theme}>
  //     <AuthContext.Provider value={authContext}>
  //     <NavigationContainer theme={theme}>
  //       { loginState.userToken !== null ? (
  //       <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
  //         <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
  //         <Drawer.Screen name="SupportScreen" component={SupportScreen} />
  //         <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
  //         <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
  //       </Drawer.Navigator>
  //     )
  //   :
  //     <RootStackScreen/>
  //   }
  //     </NavigationContainer>
  //     </AuthContext.Provider>
  //   </PaperProvider>
  // );
}

export default App;