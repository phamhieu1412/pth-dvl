import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableHighlight,
} from "react-native";

const tabs = [1, 2, 3, 4, 5];

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathX: "357",
      pathY: "675",
      pathA: "689",
      pathB: "706",
    };
  }

  render() {
    return (
      <View style={[styles.container]}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
  content: {
    flexDirection: "column",
    zIndex: 0,
    width: Dimensions.get("window").width - 30,
    marginBottom: "4%",
    left: "4%",
    right: "4%",
    position: "absolute",
    top: "12%",
  },
  subContent: {
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    zIndex: 1,
    position: "absolute",
    bottom: 5,
  }
});

export default HomeScreen;