import React, { PureComponent } from 'react';
import { View } from "react-native";

import Home from '../containers/Home';
import { FocusAwareStatusBar } from '../ultils/StatusBar';

class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      headerShownHome: false,
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <FocusAwareStatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />

        <Home navigation={navigation} />
      </View>
    )
  }
}

export default HomeScreen;