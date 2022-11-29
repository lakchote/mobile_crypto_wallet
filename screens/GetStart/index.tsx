import { LinearGradient } from "expo-linear-gradient"
import { Image, Pressable, Text, View } from "react-native"
import theme from "../../styles/theme"
import styles from "./styles"
import { GetStartProps } from "./types"

export const GetStart = ({ navigation }: GetStartProps) => {
  const onImportSeed = () => {
    navigation.navigate("ImportSeed")
  }
  const onCreateWallet = () => {
    navigation.navigate("CreateWallet")
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/get-start/wallet.png")} style={theme.IMAGE} />
      <Text style={styles.title}>Wallet Setup</Text>
      <View>
        <Pressable style={[styles.button, styles.buttonMarginBottom]} onPress={onImportSeed}>
          <Text style={styles.text}>Import Using Seed Phrase</Text>
        </Pressable>
        <LinearGradient colors={theme.LINEAR_GRADIENT} style={theme.GRADIENT_BORDER}>
          <Text style={[theme.BUTTON_GRADIENT, styles.textCenter]} onPress={onCreateWallet}>
            Create a New Wallet
          </Text>
        </LinearGradient>
      </View>
    </View>
  )
}
