import { StackNavigationProp } from "@react-navigation/stack"
import AppIntroSlider from "react-native-app-intro-slider"
import { RootStackParamList } from "../../types"

export type RenderPaginationProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[]
  activeIndex: number
  slider: AppIntroSlider | null
  onIntroCompleted: () => void
}

export type IntroNavigationProps = StackNavigationProp<RootStackParamList, "Intro">

export interface IntroProps {
  navigation: IntroNavigationProps
}
