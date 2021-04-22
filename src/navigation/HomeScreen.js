import React, { Component } from 'react';
import { View } from "react-native";

import Home from '../containers/Home';
import { Color } from '../common';
import { FocusAwareStatusBar } from '../ultils/StatusBar';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <FocusAwareStatusBar barStyle="light-content" backgroundColor={Color.primary} translucent={false} />

        <Home navigation={navigation} />
      </View>
    )
  }
}

export default HomeScreen;