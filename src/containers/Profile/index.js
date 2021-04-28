import React from "react";
import {
  ImageBackground,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import SwitchSelector from "react-native-switch-selector";

import { Styles, Color, Images } from '../../common';
import { IconMI, Icon } from '../../Omni';
import styles from './styles';

const { height } = Styles;

const Profile = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* header */}
      <ImageBackground
        source={require("../../images/profile/photo.png")}
        style={{ height: 0.45 * height }}
      >
        <View style={styles.viewButtonHeader}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <IconMI name="sort" size={28} color={Color.white} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="filter-outline" size={25} color={Color.white} />
          </TouchableOpacity>
        </View>
        <LinearGradient
          colors={["rgba(36,19,50,1)", "transparent"]}
          style={styles.linearGradient}
        >
          <Text style={styles.nameUser}>
            Ida Niska
          </Text>
        </LinearGradient>
      </ImageBackground>

      {/* info follow - like */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={styles.textNumber}>
            125
          </Text>
          <Text style={styles.textContent}>
            FOLLOWERS
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.textNumber}>
            150
          </Text>
          <Text style={styles.textContent}>
            FOLLOWING
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.textNumber}>
            321
          </Text>
          <Text style={styles.textContent}>
            LIKES
          </Text>
        </View>
      </View>

      {/* Switch tab */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#352641",
          marginTop: 30,
          marginHorizontal: 10,
          borderRadius: 60,
          paddingHorizontal: 5,
          paddingVertical: 5,
        }}
      >
        <SwitchSelector
          initial={0}
          onPress={value => console.log({ gender: value })}
          fontSize={16}
          textColor={'#918998'} //'#7a44cf'
          selectedColor={Color.white}
          buttonColor={'#8A56AC'}
          borderColor={'#352641'}
          backgroundColor={'#352641'}
          hasPadding
          options={[
            { label: "POPULAR", value: "f" },
            { label: "RECENT", value: "m" },
          ]}
          testID="gender-switch-selector"
          accessibilityLabel="gender-switch-selector"
        />
      </View>

      {/* News */}
      <View style={styles.viewNews}>
        <View style={styles.viewBodyNews}>
          <Image source={require("../../images/profile/avatar.png")} />
          <View style={{ paddingHorizontal: 20 }}>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileDetail')}>
              <Text style={{ fontSize: 18, color: Color.white }}>
                Ida Niska
            </Text>
            </TouchableOpacity>
            <Text style={styles.textContent}>
              1 hour ago
            </Text>
          </View>
          <Icon
            name="chevron-down"
            color={"rgba(255,255,255,0.3)"}
            size={24}
            style={{ marginHorizontal: 50 }}
          />
        </View>
        <Text style={styles.newsContent}>
          Believe in yourself, take on your challenges, dig deep within yourself
          to conquer fears. Never let anyone bring you down. You got to keep
          going.
        </Text>
        <View style={styles.viewNewsAction}>
          <Text style={[styles.numberNewsAction, { paddingLeft: 10 }]}>
            256
          </Text>
          <Icon
            name="comment-multiple-outline"
            color={"rgba(255,255,255,0.3)"}
            size={22}
          />

          <Text style={[styles.numberNewsAction, { paddingLeft: 30 }]}>
            516
          </Text>
          <Icon
            name="heart-outline"
            color={"rgba(255,255,255,0.3)"}
            size={22}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;