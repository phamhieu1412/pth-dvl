import { StyleSheet } from 'react-native';

import { Styles, Color, Device } from '../../common';

const { width } = Styles;

const styles = StyleSheet.create({
  container: {
    height: Device.HeaderHeight, // STICKY_HEADER_HEIGHT = 60
    width: width,
    // backgroundColor: '#FFD55A',
    backgroundColor: '#F6F6F8',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchSection: {
    flex: 1,
    marginTop: Device.isIphoneX ? 35 : 25, // =marginTop of buttonNotification
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ececec',
  },
  searchInput: {
    flex: 1,
    paddingVertical: 7,
    color: '#424242',
    backgroundColor: '#ececec',
  },
  buttonNotification: {
    marginTop: Device.isIphoneX ? 35 : 25, // =marginTop of searchSectionT
    marginLeft: 15,
  }
});

export default styles;