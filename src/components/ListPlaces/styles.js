import { StyleSheet } from 'react-native';

import { Styles, Color } from '../../common';

const { width } = Styles;

const styles = StyleSheet.create({
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
});

export default styles;