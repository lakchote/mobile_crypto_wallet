import { StyleSheet } from "react-native"
import theme from "../../../styles/theme"

const textAlignCenter = "center"
const textColor = "#5F97FF"

export default StyleSheet.create({
  colorWhite: {
    color: theme.COLOR_WHITE,
  },
  container: {
    alignItems: "baseline",
    backgroundColor: theme.BACKGROUND_COLOR,
    flex: 1,
    justifyContent: "center",
    minHeight: "100%",
    paddingBottom: 66,
  },
  text: {
    color: theme.COLOR_WHITE,
    fontFamily: theme.FONT_FAMILY,
    textAlign: textAlignCenter,
  },
  textColor: {
    color: textColor,
  },
  textContainer: { marginHorizontal: 24, marginTop: "5%" },
})
