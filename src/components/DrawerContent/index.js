import React from 'react';
import { View } from 'react-native';
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Images } from '../../common'
import styles from './styles';

const AuthContext = React.createContext();

export function DrawerContent(props) {

  const paperTheme = useTheme();
  console.log(props)
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
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="home-outline"
                  color={color}
                  size={size}
                />
              )}
              // icon={({ focused, color, size }) => {
              // focused ? (
              //   <LottieView
              //     source={Images._homeIcon}
              //     autoPlay={focused}
              //     style={{ height: 25 }}
              //   />
              // ) : (
              //   
              // )
              //   console.log('is', focused)
              // }}
              label="Home"
              onPress={() => { props.navigation.navigate('HomeScreen') }}
            />
            <DrawerItem
              icon={({ focused, color, size }) => console.log('isss', focused)}
              icon={({ color, size }) => (
                <Icon
                  name="account-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Profile"
              onPress={() => { props.navigation.navigate('ProfileScreen') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="bookmark-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Bookmarks"
              onPress={() => { props.navigation.navigate('DetaiPlacesScreen') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="settings-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Settings"
              onPress={() => { props.navigation.navigate('SettingsScreen') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="account-check-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Support"
              onPress={() => { props.navigation.navigate('SupportScreen') }}
            />
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
