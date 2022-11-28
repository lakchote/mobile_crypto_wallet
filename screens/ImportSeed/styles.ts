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

const textInputBorderColor = "#181E25"
const textInputBorderRadius = 16
const textInputBorderWidth = 1
const textInputColor = "#6A84A0"
const textInputHeight = 64
const textInputMxHorizontal = 24
const textInputPaddingBottom = 20
const textInputPaddingLeft = 30
const textInputPaddingTop = 20
const textInputWidth = 327

const mnemonicColor = "red"
const mnemonicTextAlign = "center"

const termsAndConditionsTextColor = "#5F97FF"

const btnDisabledColor = "#101419"
const btnBgColor = "#101419"

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
  colorWhite: {
    color: theme.COLOR_WHITE,
  },
  container: {
    backgroundColor: theme.BACKGROUND_COLOR,
    flex: 1,
    minHeight: "100%",
    paddingBottom: 66,
  },
  invalidMnemonic: { color: mnemonicColor, textAlign: mnemonicTextAlign },
  navbar: {
    backgroundColor: theme.BACKGROUND_COLOR,
    fontFamily: theme.FONT_FAMILY,
    fontSize: 16,
    paddingTop: 54,
    position: "relative",
  },
  navbarChevron: { color: theme.COLOR_WHITE, marginLeft: 26 },
  navbarContent: { flex: 0, flexDirection: "row", justifyContent: "space-between" },
  navbarText: { color: theme.COLOR_WHITE, marginRight: 120 },
  navbarTitle: {
    color: theme.COLOR_WHITE,
    fontFamily: theme.FONT_FAMILY,
    fontSize: 16,
    textAlign: textAlignCenter,
  },
  paddingTop50: {
    paddingTop: 50,
  },
  termsAndConditions: { marginLeft: 32, marginRight: 24, marginTop: 200, paddingBottom: 190 },
  termsAndConditionsText: {
    color: termsAndConditionsTextColor,
  },
  text: {
    color: theme.COLOR_WHITE,
    fontFamily: theme.FONT_FAMILY,
    textAlign: textAlignCenter,
  },
  textCenter: {
    textAlign: textAlignCenter,
  },
  textInput: {
    borderColor: textInputBorderColor,
    borderRadius: textInputBorderRadius,
    borderWidth: textInputBorderWidth,
    color: textInputColor,
    height: textInputHeight,
    marginHorizontal: textInputMxHorizontal,
    paddingBottom: textInputPaddingBottom,
    paddingLeft: textInputPaddingLeft,
    paddingTop: textInputPaddingTop,
    width: textInputWidth,
  },
})
