import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
} from 'react-native';

import { IconMI } from '../../Omni';
import { Color, Styles } from '../../common';
import { ListPlaces, ListRecommended } from '../../components';
import styles from './styles';

const Home = ({ navigation }) => {
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

  return (
    <View style={{ flex: 1, backgroundColor: Color.white }}>
      {/* header */}
      <View style={styles.header}>
        <IconMI name="sort" size={28} color={Color.white} />
        <IconMI name="notifications-none" size={28} color={Color.white} />
      </View>

      {/* Search */}
      <View
        style={{
          backgroundColor: Color.primary,
          height: 120,
          paddingHorizontal: 20,
          zIndex: 2,
        }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.headerTitle}>Explore the</Text>
          <Text style={styles.headerTitle}>beautiful places</Text>
          <View style={[styles.inputContainer, Styles.blockShadow]}>
            <IconMI name="search" size={28} />
            <TextInput
              placeholder="Search place"
              style={{ color: Color.grey }}
            />
          </View>
        </View>
      </View>

      {/* Content body */}
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 90, zIndex: 1 }}>
        <ListCategories />
        <View>
          <ListPlaces navigation={navigation} />

          <ListRecommended navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
