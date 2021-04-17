import { StyleSheet } from 'react-native';

import { Styles, Color } from '../../common';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: Styles.height / 3,
    left: Styles.width / 20,
    right: Styles.width / 20,
    alignItems: 'center',
    zIndex: 9999,
  },
  textWrap: {
    backgroundColor: 'rgba(60,60,60,0.6)',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 5,
  },
  text: {
    color: Color.white,
    textAlign: 'center',
  },
});

export default styles;