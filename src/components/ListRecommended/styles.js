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
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
});

export default styles;