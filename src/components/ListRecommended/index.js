import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
} from 'react-native';

import { IconMI } from '../../Omni';
import { Color, Styles } from '../../common';
import styles from './styles';

const places = [
  {
    id: '1',
    name: 'Lago di Braies, Braies',
    location: 'Italy',
    image: require('../../images/travels/location1.jpg'),
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.`,
  },
  {
    id: '2',
    name: 'Siargao island',
    location: 'Philippines',
    image: require('../../images/travels/location2.jpg'),
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.`,
  },
  {
    id: '3',
    name: 'Manarola',
    location: 'Italy',
    image: require('../../images/travels/location3.jpg'),
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.`,
  },
  {
    id: '4',
    name: 'Perhentian Islands',
    location: 'Malaysia',
    image: require('../../images/travels/location4.jpg'),
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.`,
  },
];

const ListRecommended = ({ navigation }) => {

  const RecommendedCard = ({ place }) => {
    return (
      <ImageBackground style={styles.rmCardImage} source={place.image}>
        <Text
          style={{
            color: Color.white,
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {place.name}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <IconMI name="place" size={22} color={Color.white} />
              <Text style={{ color: Color.white, marginLeft: 5 }}>
                {place.location}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <IconMI name="star" size={22} color={Color.white} />
              <Text style={{ color: Color.white, marginLeft: 5 }}>5.0</Text>
            </View>
          </View>
          <Text style={{ color: Color.white, fontSize: 13 }}>
            {place.details}
          </Text>
        </View>
      </ImageBackground>
    );
  };

  return (
    <>
      <Text style={styles.sectionTitle}>Recommended</Text>
      <FlatList
        snapToInterval={Styles.width - 20}
        contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={places}
        renderItem={({ item }) => <RecommendedCard place={item} />}
      />
    </>
  );
};

export default ListRecommended;
