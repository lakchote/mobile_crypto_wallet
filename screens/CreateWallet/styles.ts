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
const seedPhraseColor = "#5F97FF"

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
  buttonToBottom: {
    bottom: 0,
    position: "absolute",
  },
  colorWhite: {
    color: theme.COLOR_WHITE,
  },
  container: {
    backgroundColor: theme.BACKGROUND_COLOR,
    flex: 1,
    minHeight: "100%",
    paddingBottom: 66,
    position: "relative",
  },
  navbar: {
    backgroundColor: theme.BACKGROUND_COLOR,
    fontFamily: theme.FONT_FAMILY,
    fontSize: 16,
    paddingTop: 54,
    position: "relative",
  },
  navbarChevron: { color: theme.COLOR_WHITE, marginLeft: 26 },
  navbarContent: { flex: 0, flexDirection: "row", justifyContent: "space-between" },
  navbarText: { color: theme.COLOR_WHITE, marginRight: 140 },
  navbarTitle: {
    color: theme.COLOR_WHITE,
    fontFamily: theme.FONT_FAMILY,
    fontSize: 16,
    textAlign: textAlignCenter,
  },
  paddingTop50: {
    paddingTop: 50,
  },
  seedPhrase: { marginHorizontal: 24, marginVertical: 50 },
  seedPhraseColor: {
    color: seedPhraseColor,
  },
  seedPhraseIntro: { marginHorizontal: 24, marginTop: 150 },
  text: {
    color: theme.COLOR_WHITE,
    fontFamily: theme.FONT_FAMILY,
    textAlign: textAlignCenter,
  },
  textCenter: {
    textAlign: textAlignCenter,
  },
})
