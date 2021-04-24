import React from 'react';
import {
  ImageBackground,
  StatusBar,
  View,
  Text,
} from 'react-native';

import { Back } from '../../navigation/IconNavigation';
import { IconMI } from '../../Omni';
import { Color, Styles } from '../../common';
import styles from './styles';

const DetailPlaces = ({navigation, route}) => {
  const place = route.params;
  return (
    <View style={{flex: 1, backgroundColor: Color.white}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={{flex: 0.7}} source={place?.image}>
        <View style={styles.header}>
          {
            Back(navigation, Color.white, 'arrow-left', 30)
          }
          <IconMI name="more-vert" size={28} color={Color.white} />
        </View>
        <View style={styles.imageDetails}>
          <Text
            style={{
              width: '70%',
              fontSize: 30,
              fontWeight: 'bold',
              color: Color.white,
              marginBottom: 20,
            }}>
            {place.name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <IconMI name="star" size={30} color={Color.orange} />
            <Text
              style={{color: Color.white, fontWeight: 'bold', fontSize: 20}}>
              5.0
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <View style={[styles.iconContainer, Styles.favouriteShadow]}>
          <IconMI name="favorite" color={Color.red} size={30} />
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <IconMI name="place" size={28} color={Color.primary} />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 20,
              fontWeight: 'bold',
              color: Color.primary,
            }}>
            {place.location}
          </Text>
        </View>
        <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 20}}>
          About the trip
        </Text>
        <Text style={{marginTop: 20, lineHeight: 22}}>{place.details}</Text>
      </View>
      <View style={styles.footer}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: Color.white,
            }}>
            $100
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: Color.grey,
              marginLeft: 2,
            }}>
            /PER DAY
          </Text>
        </View>
        <View style={styles.bookNowBtn}>
          <Text
            style={{color: Color.primary, fontSize: 16, fontWeight: 'bold'}}>
            Book Now
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailPlaces;
