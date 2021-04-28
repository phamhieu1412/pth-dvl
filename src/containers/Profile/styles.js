import { StyleSheet } from 'react-native';

import { Styles, Color, Device } from '../../common';

const { width, height } = Styles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#241332",
  },

  // header
  viewButtonHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 60,
    alignItems: "center",
  },
  linearGradient: {
    transform: [{ rotate: "180deg" }],
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    height: 0.16 * height,
  },
  nameUser: {
    transform: [{ rotate: "-180deg" }],
    color: "#FFF",
    fontSize: 35,
    marginVertical: 30,
    alignSelf: "center",
  },

  // info follow - like
  textNumber: {
    fontSize: 28,
    color: Color.white,
  },
  textContent: {
    fontSize: 16,
    color: "#918998",
  },

  // content
  viewNews: {
    backgroundColor: "#352641",
    borderRadius: 40,
    marginHorizontal: 10,
    paddingVertical: 20,
    marginTop: 20,
  },
  viewBodyNews: {
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "space-between",
  },
  newsContent: {
    fontSize: 17,
    color: "#918998",
    marginVertical: 20,
    paddingHorizontal: 30,
    textAlign: "center",
  },
  viewNewsAction: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 5,
  },
  numberNewsAction: {
    fontSize: 16,
    color: Color.white,
    paddingRight: 10,
  },
});

export default styles;