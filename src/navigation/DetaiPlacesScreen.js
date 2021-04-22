import React, { Component } from 'react';
import { View } from "react-native";

import { Color } from '../common';
import DetailPlaces from '../containers/DetailPlaces';
import { FocusAwareStatusBar } from '../ultils/StatusBar';

class DetailPlacesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation, route } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <FocusAwareStatusBar barStyle="light-content" backgroundColor={Color.primary} translucent={false} />

        <DetailPlaces
          navigation={navigation}
          route={route}
        />
      </View>
    )
  }
}

export default DetailPlacesScreen;