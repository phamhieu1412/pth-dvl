import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import LottieView from 'lottie-react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import { IconMI } from '../../Omni';
import { Color, Styles, Device } from '../../common';
import { ListPlaces, ListRecommended, HeaderTitle } from '../../components';
import { setBarStyle } from '../../ultils/StatusBar';
import styles from './styles';

const { height } = Styles;

const Home = ({ navigation }) => {
  const window = Dimensions.get('window');
  const parallaxHeaderHeight = height * 0.25;
  const STICKY_HEADER_HEIGHT = Device.HeaderHeight;

  const categoryIcons = [
    <IconMI name="flight" size={25} color={Color.primary} />,
    <IconMI name="beach-access" size={25} color={Color.primary} />,
    <IconMI name="near-me" size={25} color={Color.primary} />,
    <IconMI name="place" size={25} color={Color.primary} />,
  ];

  const ListCategories = () => {
    return (
      <View style={styles.categoryContainer}>
        {categoryIcons.map((icon, index) => (
          <View key={index} style={styles.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
    );
  };

  const _renderForeground = () => {
    return (
      <View key="foreground" style={styles.fixedSection}>
        <View style={[styles.header]}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <IconMI name="sort" size={28} color={Color.white} />
          </TouchableOpacity>
          <LottieView
            source={require('../../images/lottieFiles/notification.json')}
            autoPlay={true}
            style={{ height: 50 }}
          />
        </View>
      </View>
    )
  }

  const _renderStickyHeader = () => {
    return <HeaderTitle />;
  }

  const _renderBackground = () => {
    return (
      <View key="background">
        <Image
          source={require('../../images/travels/location2.jpg')}
          style={{ width: window.width, height: parallaxHeaderHeight, resizeMode: 'cover' }}
        />
        <View style={{
          position: 'absolute',
          top: 0,
          width: window.width,
          backgroundColor: 'rgba(0,0,0,.2)',
          height: parallaxHeaderHeight
        }} />
      </View>
    )
  }

  const _renderContentBackground = () => {
    return (
      <>
        {/* Search */}
        <View
          style={{
            marginTop: -25,
            marginHorizontal: 20,
          }}>
          <View style={[styles.inputContainer, Styles.blockShadow]}>
            <IconMI name="search" size={28} style={{ marginRight: 5 }} />
            <TextInput
              placeholder="Search place"
              style={{ color: Color.grey }}
            />
          </View>
        </View>

        {/* Content body */}
        <ListCategories />
        <View>
          <ListPlaces navigation={navigation} />

          <ListRecommended navigation={navigation} />
        </View>
      </>
    )
  }

  const changeHeaderVisibility = (nativeEvent) => {
    if (nativeEvent.contentOffset.y > 100) {
      setBarStyle('dark-content');
    }
    else {
      setBarStyle('light-content');
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      <ParallaxScrollView
        headerBackgroundColor={Color.primary}
        stickyHeaderHeight={STICKY_HEADER_HEIGHT}
        parallaxHeaderHeight={parallaxHeaderHeight}
        backgroundSpeed={10}
        renderBackground={_renderBackground}// render image background
        renderContentBackground={_renderContentBackground}
        renderForeground={_renderForeground}// render content in image background
        renderStickyHeader={_renderStickyHeader}// render header when scroll down
        scrollEvent={(e) => changeHeaderVisibility(e.nativeEvent)}
      />
    </View>
  );
};

export default Home;
