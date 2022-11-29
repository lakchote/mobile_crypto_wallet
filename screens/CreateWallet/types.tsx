import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../../types"

export type CreateWalletNavigationProps = StackNavigationProp<RootStackParamList, "CreateWallet">

export interface CreateWalletProps {
  navigation: CreateWalletNavigationProps
}
