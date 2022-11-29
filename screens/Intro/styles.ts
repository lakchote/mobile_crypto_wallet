import { StyleSheet } from "react-native"
import theme from "../../styles/theme"

const dotActiveColor = "#3D8DFF"
const dotInactiveColor = "#384657"
const textAlignCenter = "center"

const whiteColor = "#fff"

export default StyleSheet.create({
  dot: {
    borderRadius: 5,
    height: 8,
    marginHorizontal: 4,
    width: 8,
  },
  dotActive: {
    backgroundColor: dotActiveColor,
  },
  dotInactive: {
    backgroundColor: dotInactiveColor,
  },
  maskedView: {
    height: 48,
  },
  paginationContainer: {
    bottom: 16,
    left: 16,
    position: "absolute",
    right: 16,
  },
  paginationDots: {
    alignItems: "center",
    flexDirection: "row",
    height: 16,
    justifyContent: "center",
    margin: 16,
  },
  slide: {
    alignItems: "center",
    backgroundColor: theme.BACKGROUND_COLOR,
    flex: 1,
    justifyContent: "flex-start",
  },
  text: {
    color: whiteColor,
    fontFamily: theme.FONT_FAMILY,
    textAlign: textAlignCenter,
  },
  title: {
    color: whiteColor,
    fontFamily: "archivo",
    fontSize: 40,
    textAlign: textAlignCenter,
  },
  titleContainer: {
    lineHeight: "36px",
    width: 220,
  },
})
