import React from 'react';
import { View, Image } from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import LottieView from 'lottie-react-native';

import { Images, Languages, Color } from '../../common';
import { Icon } from '../../Omni';
import styles from './styles';

const AuthContext = React.createContext();

function DrawerContent(props) {
  const { navigation, state } = props;
  const routes = [
    {
      screenName: 'HomeScreen',
      label: Languages.Home,
      iconActive: Images.homeIcon,
      iconDeactive: Images._homeIcon,
    },
    {
      screenName: 'ProfileScreen',
      label: Languages.Account,
      iconActive: Images.profileIcon,
      iconDeactive: Images._profileIcon,
    },
  ];
  const selectedRoute = state.routeNames[state.index];
  const paperTheme = useTheme();
  // const { signOut, toggleTheme } = React.useContext(AuthContext);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>John Doe</Title>
                <Caption style={styles.caption}>@j_doe</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            {routes.map((route, index) => (
              <DrawerItem
                key={index}
                icon={() => route.screenName === selectedRoute ?
                  <LottieView
                    source={route.iconDeactive}
                    autoPlay={true}
                    style={{ height: 25 }}
                  /> :
                  <Image
                    source={route.iconActive}
                    style={{ width: 20, height: 20 }}
                  />
                }
                label={() => <Text style={[{ fontSize: 16 }, route.screenName === selectedRoute && { color: Color.primary }]}>
                  {route.label}
                </Text>}
                onPress={() => { navigation.navigate(route.screenName) }}
              />
            ))}
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => { toggleTheme() }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Sign Out"
        // onPress={() => { signOut() }}
        />
      </Drawer.Section>
    </View>
  );
}

export default DrawerContent;