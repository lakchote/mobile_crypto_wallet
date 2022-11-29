const backgroundColor = "#000"
const btnBorderRadius = 80
const btnPaddingLeft = 12
const btnPaddingRight = 12
const btnPaddingTop = 16
const btnPaddingBottom = 16
const btnHeight = 48
const btnMarginHorizontal = 24
const btnBackgroundColor = "#202832"
const colorWhite = "#fff"
const fontFamily = "archivo"

export default {
  FLEX: { flex: 1 },
  BUTTON: {
    backgroundColor: btnBackgroundColor,
    borderRadius: btnBorderRadius,
    height: btnHeight,
    marginHorizontal: btnMarginHorizontal,
    paddingBottom: btnPaddingBottom,
    paddingLeft: btnPaddingLeft,
    paddingRight: btnPaddingRight,
    paddingTop: btnPaddingTop,
  },
  BUTTON_GRADIENT: {
    borderRadius: btnBorderRadius,
    color: colorWhite,
    height: btnHeight,
    marginHorizontal: btnMarginHorizontal,
    paddingBottom: btnPaddingBottom,
    paddingLeft: btnPaddingLeft,
    paddingRight: btnPaddingRight,
    paddingTop: btnPaddingTop,
  },
  GRADIENT_BORDER: {
    borderRadius: 50,
    borderWidth: 1,
    marginHorizontal: 12,
    width: 327,
  },
  BACKGROUND_COLOR: backgroundColor,
  COLOR_WHITE: colorWhite,
  FONT_FAMILY: fontFamily,
  IMAGE: {
    height: 295,
    marginVertical: 71,
    width: 295,
  },
  LINEAR_GRADIENT: ["#8AD4EC", "#EF96FF", "#FF56A9", "#FFAA6C"],
}
