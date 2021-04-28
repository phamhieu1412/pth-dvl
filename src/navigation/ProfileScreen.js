import React, { Component } from 'react';
import { View } from "react-native";

import Profile from '../containers/Profile';
import { Color } from '../common';
import { FocusAwareStatusBar } from '../ultils/StatusBar';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <FocusAwareStatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />

        <Profile navigation={navigation} />
      </View>
    )
  }
}

export default ProfileScreen;