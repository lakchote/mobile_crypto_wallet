import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../../types"

export type GetStartNavigationProps = StackNavigationProp<RootStackParamList, "GetStart">

export interface GetStartProps {
  navigation: GetStartNavigationProps
}
