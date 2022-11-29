import { StyleSheet } from "react-native"
import theme from "../../../styles/theme"

const textAlignCenter = "center"
const textColor = "#5F97FF"
const textRed = "red"
const textAccent = "#3D8DFF"

const btnBackgroundColor = "#202832"
const btnBorderRadius = 168
const btnPaddingLeft = 63.5
const btnPaddingRight = 63.5
const btnPaddingTop = 20
const btnPaddingBottom = 16
const btnHeight = 56
const btnMarginHorizontal = 12

const textInputBorderColor = "#181E25"
const textInputBorderRadius = 16
const textInputBorderWidth = 1
const textInputColor = "#6A84A0"
const textInputHeight = 64
const textInputMxHorizontal = 24
const textInputMarginBottom = "5%"
const textInputPaddingBottom = 20
const textInputPaddingLeft = 30
const textInputPaddingTop = 20
const textInputWidth = 327
const btnDisabledColor = "#101419"
const btnBgColor = "#101419"
const textTxSuccess = "#54F0D1"

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
  buttonDisabled: { backgroundColor: btnBgColor, color: btnDisabledColor },
  buttonMarginBottom: {
    marginBottom: 16,
  },
  buttonToBottom: {
    bottom: 4,
    position: "absolute",
  },
  colorWhite: {
    color: theme.COLOR_WHITE,
  },
  container: {
    alignItems: "center",
    backgroundColor: theme.BACKGROUND_COLOR,
    flex: 1,
    justifyContent: "center",
    minHeight: "100%",
    paddingBottom: 66,
    position: "relative",
  },
  marginX10: {
    marginHorizontal: 10,
  },
  paddingBottom5: {
    paddingBottom: 5,
  },
  paddingTop50: {
    paddingTop: 50,
  },
  selectButton: {
    marginVertical: 16,
  },
  text: {
    color: theme.COLOR_WHITE,
    fontFamily: theme.FONT_FAMILY,
    textAlign: textAlignCenter,
  },
  textAccent: {
    color: textAccent,
  },
  textCenter: {
    textAlign: textAlignCenter,
  },
  textColor: {
    color: textColor,
  },
  textContainer: { marginHorizontal: 24, marginTop: "5%" },
  textInput: {
    borderColor: textInputBorderColor,
    borderRadius: textInputBorderRadius,
    borderWidth: textInputBorderWidth,
    color: textInputColor,
    height: textInputHeight,
    marginBottom: textInputMarginBottom,
    marginHorizontal: textInputMxHorizontal,
    paddingBottom: textInputPaddingBottom,
    paddingLeft: textInputPaddingLeft,
    paddingTop: textInputPaddingTop,
    width: textInputWidth,
  },
  textRed: {
    color: textRed,
  },
  txSuccess: {
    color: textTxSuccess,
    textAlign: textAlignCenter,
  },
})
