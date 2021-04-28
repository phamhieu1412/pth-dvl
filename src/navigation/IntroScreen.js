import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LottieView from 'lottie-react-native';

import { Color, Images, Languages } from '../common';
import { setBarStyle, setTranslucent, setBackgroundColor } from '../ultils/StatusBar';

class IntroScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    setBarStyle('light-content');
    setTranslucent(true);
    setBackgroundColor('transparent');
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Lottie view */}
        <View style={styles.viewLottie}>
          <LottieView
            source={Images.introJson_1}
            autoPlay={true}
            style={{ height: 400 }}
          />
          <LottieView
            source={Images.introJson_2}
            autoPlay={true}
            style={{ height: 160, position: 'absolute' }}
          />
        </View>

        {/* Name && slogen */}
        <View style={{ justifyContent: 'flex-start' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <LottieView
              source={Images.introJson_2}
              autoPlay={true}
              style={{ height: 80 }}
            />
            <Text style={styles.textName}>H . L</Text>
          </View>
          <Text style={{ fontSize: 18 }}>Nơi lưu trữ kỷ niệm đáng nhớ</Text>
          <Text style={{ fontSize: 18 }}>về những địa điểm và món ăn từng thử</Text>
        </View>

        {/* Button started */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.buttonStart}>
          <Text style={styles.textButtonStart}>
            {Languages.Started}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD55A',
    alignItems: 'center',
    position: 'relative',
  },
  // lottie file
  viewLottie: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Name && slogen
  textName: {
    fontSize: 36,
    fontWeight: '500',
    color: Color.white,
  },

  // Button started
  buttonStart: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    backgroundColor: '#F4B41A',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  textButtonStart: {
    fontSize: 20,
    fontWeight: '500',
    color: Color.white,
  }
});