import React from 'react';
import { View, Platform, Text } from 'react-native';

import { StylesCommon } from '../common/Styles';
import { NavigationBarSearch, NavigationBarIcon, BackWithTitleIcons, FilterIcon } from '../components';

const BackWithTitle = (navigation, title, background, onPress) => (
  <BackWithTitleIcons
    navigation={navigation}
    title={title}
    background={background}
    onPress={onPress}
  />
);

// const FocusSearch = (navigation, colorScheme) => (
//   <NavigationBarSearch onPress={() => navigation.navigate('SearchScreen')} colorScheme={colorScheme} />
// );

// const EmptyView = () => (
//   <View style={[StylesCommon.Row, { right: -5 }, Platform.OS !== 'ios' && { right: -12 }]} />
// );

// const SearchRight = (navigation, color) => (
//   <View style={[StylesCommon.Row]}>
//     <NavigationBarIcon icon="search" onPress={() => navigation.navigate('SearchScreen')} color={color} />
//   </View>
// );

// const FilterRight = (navigation, onPress, color) => (
//   <View style={[StylesCommon.Row]}>
//     <FilterIcon icon="filter-outline" onPress={onPress} color={color} />
//   </View>
// );

const Back = (navigation, color, icon, size, onPress) => (
  <View style={StylesCommon.Row}>
    <NavigationBarIcon
      icon={icon || 'arrow-left'}
      onPress={onPress ? onPress : () => navigation.goBack(null)}
      color={color}
      size={size || 18}
    />
  </View>
);

// const RightIcon = (icon, onPress, dark) => (
//   <View style={[StylesCommon.Row]}>
//     <NavigationBarIcon icon={icon} size={24} onPress={onPress} />
//   </View>
// );

// const Title = (title, textColor) => (
//   <View>
//     <Text style={[StylesCommon.headerTitleStyle, { color: textColor }]}>{title}</Text>
//   </View>
// );

export {
  BackWithTitle,
  // SearchRight,
  // EmptyView,
  // FocusSearch,
  Back,
  // RightIcon,
  // Title,
  // FilterRight,
};
