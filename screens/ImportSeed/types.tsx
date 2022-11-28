import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../../types"

export type ImportSeedNavigationProps = StackNavigationProp<RootStackParamList, "ImportSeed">

export interface ImportSeedProps {
  navigation: ImportSeedNavigationProps
}
