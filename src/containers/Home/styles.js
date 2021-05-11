import { StyleSheet, Platform } from 'react-native';

import { Styles, Color, Device } from '../../common';

const { width } = Styles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fixedSection: {
    position: 'absolute',
    width: width,
    top: Platform.OS === 'ios' ? 30 : 45,
  },
  header: {
    paddingTop: Device.isIphoneX ? 40 : 15,
    paddingBottom: Device.isIphoneX ? 10 : 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width,
  },
  headerTitle: {
    color: Color.white,
    fontWeight: 'bold',
    fontSize: 23,
  },
  inputContainer: {
    height: 50,
    width: '100%',
    backgroundColor: Color.white,
    borderRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 12,
  },
  categoryContainer: {
    marginTop: 30,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: Color.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5
  },
});

export default styles;