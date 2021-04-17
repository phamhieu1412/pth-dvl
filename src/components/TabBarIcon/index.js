import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import { connect } from 'react-redux';

import styles from './styles';
import { Color } from '../../common';

class TabBarIcon extends PureComponent {
  static propTypes = {
    icon: PropTypes.any,
    color: PropTypes.string,
    css: PropTypes.any,
    myMessages: PropTypes.any,
    messageIcon: PropTypes.any,
  };

  numberWrap = (number = 0) => {
    return (
      <View style={styles.numberWrap}>
        <Text style={styles.number}>{number}</Text>
      </View>
    )
  };

  render() {
    const {
      focused,
      image,
      imageIcon,
      textIcon,
      name,
      styleProfile,
    } = this.props;

    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        {
          focused === true ? (
            <LottieView
              source={imageIcon}
              autoPlay={focused}
              style={name === 'ProfileScreen' ? styleProfile : { height: 25 }}
            />
          ) : (
            <Image
              source={image}
              style={{ width: 25, height: 25 }}
            />
          )
        }
        <Text style={{
          color: focused ? Color.tabbarTint : Color.tabbarColor,
          fontSize: 12,
          marginTop: name === 'ProfileScreen' ? ( focused ? -1 : 7 ) : 7,
        }}>
          {textIcon}
        </Text>
        {/* {wishlistIcon && wishList.total > 0 && numberWrap(wishList.total || 0)}
        {cartIcon && carts.orderItems.length > 0 && numberWrap(carts.orderItems.length || 0)} */}
        {/* {messageIcon && myMessages.numberOfUnread > 0 && numberWrap(myMessages.numberOfUnread || 0)} */}
      </View>
    );
  }
}

const mapStateToProps = ({ myMessages }) => ({

});

export default connect(
  mapStateToProps,
  null,
  null
)(TabBarIcon);
