import { StyleSheet } from "react-native"
import theme from "../../styles/theme"

const textAlignCenter = "center"

const btnBackgroundColor = "#202832"
const btnBorderRadius = 168
const btnPaddingLeft = 63.5
const btnPaddingRight = 63.5
const btnPaddingTop = 20
const btnPaddingBottom = 16
const btnHeight = 56
const btnMarginHorizontal = 12

export default StyleSheet.create({
  button: {
    backgroundColor: btnBackgroundColor,
    borderRadius: btnBorderRadius,
    height: btnHeight,
    marginHorizontal: btnMarginHorizontal,
    paddingBottom: btnPaddingBottom,
    paddingLeft: btnPaddingLeft,
    paddingRight: btnPaddingRight,
    paddingTop: btnPaddingTop,
    width: 327,
  },
  buttonMarginBottom: {
    marginBottom: 16,
  },
  container: {
    alignItems: "center",
    backgroundColor: theme.BACKGROUND_COLOR,
    flex: 1,
    justifyContent: "center",
    minHeight: 100,
    paddingBottom: 66,
  },
  text: {
    color: theme.COLOR_WHITE,
    fontFamily: theme.FONT_FAMILY,
    textAlign: textAlignCenter,
  },
  textCenter: {
    textAlign: textAlignCenter,
  },
  title: {
    color: theme.COLOR_WHITE,
    fontFamily: theme.FONT_FAMILY,
    fontSize: 40,
    marginBottom: 40,
    textAlign: textAlignCenter,
  },
})
