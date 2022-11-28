import { LinearGradient } from "expo-linear-gradient"
import { Text, View } from "react-native"
import { CreateWalletProps } from "./types"
import styles from "./styles"
import theme from "../../styles/theme"
import axios from "axios"
import { POLKADOT_PROXY_CREATE_WALLET_ENDPOINT } from "@env"
import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const CreateWallet = ({ navigation }: CreateWalletProps) => {
  const [mnemonic, setMnemonic] = useState<string>("")

  const onCreateWallet = () => {
    axios
      .get(POLKADOT_PROXY_CREATE_WALLET_ENDPOINT)
      .then((res) => {
        setMnemonic(res.data.mnemonic)
        AsyncStorage.setItem("account_address", res.data.address)
      })
      .catch((error) => {
        alert(error)
      })
  }

  useEffect(() => {
    onCreateWallet()
  }, [])

  const onCreateWalletNext = () => {
    navigation.navigate("Root")
  }

  const onChevronClick = () => {
    navigation.navigate("GetStart")
  }

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.navbarContent}>
          <Text style={styles.navbarChevron} onPress={() => onChevronClick()}>
            <Text>〈</Text>
          </Text>
          <Text style={styles.navbarText}>Create Wallet</Text>
        </View>
      </View>
      <View style={styles.seedPhraseIntro}>
        <Text style={styles.colorWhite}>
          <Text>Please save your seed phrase in a safe place in order to connect.</Text>
        </Text>
      </View>
      <View style={styles.seedPhrase}>
        <Text style={styles.seedPhraseColor}>{mnemonic}</Text>
      </View>

      <View style={styles.buttonToBottom}>
        <LinearGradient colors={theme.LINEAR_GRADIENT} style={theme.GRADIENT_BORDER}>
          <Text style={[theme.BUTTON_GRADIENT, styles.textCenter]} onPress={onCreateWalletNext}>
            Continue
          </Text>
        </LinearGradient>
      </View>
    </View>
  )
}
