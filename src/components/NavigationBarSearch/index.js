import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';

import { Icon } from '../../Omni';
import { Color, Styles } from '../../common';
import { StylesCommon } from '../../common/Styles';

const defaultSearchTerms = [
  'Thịt lợn sinh học',
  'Trứng gà ác',
  'Sữa chua nếp cẩm',
  'Nem chay',
  'Cá ngừ salat',
  'Bột canh Hải châu',
  'Dầu ăn hướng dương',
];

class NavigationBarSearch extends Component {
  constructor(props) {
    super(props);
    const { appConfig } = this.props;
    const randomSearchTerms =
      appConfig && appConfig.searchKeywords && appConfig.searchKeywords.length
        ? appConfig.searchKeywords
        : defaultSearchTerms;
    const term = randomSearchTerms[Math.floor(Math.random() * randomSearchTerms.length)];
    this.state = { term };
  }

  render() {
    const { onPress, colorScheme } = this.props;
    const { term } = this.state;
    const background = colorScheme && colorScheme === 'light' ? Color.background : '#EFEFF4';

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.iconWrap, StylesCommon.Row, { backgroundColor: background }]}>
        <Icon
          name="search"
          style={[
            styles.icon,
            // { tintColor: iconColor },
            {
              fontSize: 12,
              color: '#848484',
            },
          ]}
          resizeMode="contain"
        />
        <Text style={styles.searchTerm}>{term}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  iconWrap: {
    flexDirection: 'row',
    left: 10,
    width: Math.min(251, Styles.width - 131),
    alignItems: 'center',
    height: 33,
    opacity: 0.8,
    backgroundColor: '#EFEFF4',
    borderRadius: 16.5,
    padding: 3,
    marginLeft: Platform.OS === 'ios' ? 10 : 5,
  },
  searchTerm: {
    fontSize: 14,
    // lineHeight: 28,
    color: '#848484',
    marginLeft: 15,
  },
  icon: {
    // opacity: 0.8,
    width: 13,
    height: 13,
    left: 7,
  },
});

const mapStateToProps = ({ app }) => ({
  appConfig: app.config && app.config.app ? app.config.app : {},
});

export default connect(mapStateToProps)(NavigationBarSearch);
