import { StyleSheet } from 'react-native';

import { Styles, Color } from '../../common';

const { width } = Styles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Color.primary,
  },
  headerTitle: {
    color: Color.white,
    fontWeight: 'bold',
    fontSize: 23,
  },
  inputContainer: {
    height: 60,
    width: '100%',
    backgroundColor: Color.white,
    borderRadius: 10,
    position: 'absolute',
    top: 70,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },
  categoryContainer: {
    marginTop: 60,
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
});

export default styles;