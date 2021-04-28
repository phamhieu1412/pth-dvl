import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import * as RootNavigation from './navigation/RootNavigation';
import MyToast from './containers/MyToast';
import AppNavigator from './navigation/index';
import IntroScreen from './navigation/IntroScreen';
import { Color, Styles, Languages } from './common';

class Router extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.fetchCommonData();
  }

  fetchCommonData() {
  }

  onViewNotification = item => {
  };

  goToScreen = (routeName, params) => {
    RootNavigation.navigate(routeName, params);
  };

  render() {

    return (
      <View style={[Styles.app, { backgroundColor: Color.background }]}>
        <MyToast />
        <AppNavigator />
      </View>
    );
    // return <IntroScreen />;
  }
}

const mapStateToProps = state => ({
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  return {
    ...ownProps,
    ...stateProps,
  };
};

export default connect(
  mapStateToProps,
  undefined,
  mergeProps
)(Router);
