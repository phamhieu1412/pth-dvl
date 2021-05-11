import React, { PureComponent } from 'react';
import { View, TextInput, TouchableOpacity } from "react-native";

import { Styles } from '../../common';
import { IconAntd, Icon } from '../../Omni';
import styles from './styles';

const { width } = Styles;

class HeaderTitle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <View style={styles.container}>
        {/* Search */}
        <View style={styles.searchSection}>
          <IconAntd name="search1" size={16} style={{ marginHorizontal: 5, opacity: 0.5 }} />
          <TextInput
            placeholder="Tìm kiếm"
            // onFocus={() => navigation.navigate('Search')}
            style={styles.searchInput}
          />
        </View>

        {/* Notification */}
        <TouchableOpacity style={styles.buttonNotification}>
          <Icon name="bell-outline" size={20} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default HeaderTitle;