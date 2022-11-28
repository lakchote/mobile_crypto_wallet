import { LinearGradient } from "expo-linear-gradient"
import { Pressable, Text, TextInput, View } from "react-native"
import { ImportSeedProps } from "./types"
import styles from "./styles"
import theme from "../../styles/theme"
import axios from "axios"
import { POLKADOT_PROXY_IMPORT_SEED_ENDPOINT } from "@env"
import { useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const ImportSeed = ({ navigation }: ImportSeedProps) => {
  const [mnemonic, setMnemonic] = useState<string | null>(null)
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true)
  const [isError, setError] = useState<boolean>(false)

  const onInputChange = (val: string) => {
    if (val.trim().split(/\s+/).length >= 12) {
      setMnemonic(val)
      setIsButtonDisabled(false)
      setError(false)
    }
  }

  const onImportSeed = () => {
    axios
      .post(POLKADOT_PROXY_IMPORT_SEED_ENDPOINT, {
        mnemonic: mnemonic,
      })
      .then(async (res) => {
        AsyncStorage.setItem("account_address", res.data)
        navigation.navigate("Root")
      })
      .catch((error) => {
        setError(true)
      })
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
          <Text style={styles.navbarText}>Import From Seed</Text>
        </View>
      </View>
      <View style={styles.paddingTop50}>
        <TextInput
          onChangeText={(e) => onInputChange(e)}
          placeholder="Seed Phrase"
          placeholderTextColor="#6A84A0"
          style={styles.textInput}
        />
        {isError && <Text style={styles.invalidMnemonic}>Invalid Mnemonic</Text>}
      </View>
      <View style={styles.termsAndConditions}>
        <Text style={styles.colorWhite}>
          <Text>By proceeding, you agree to these</Text>
          <Text style={styles.termsAndConditionsText}>Term and Conditions.</Text>
        </Text>
      </View>
      <View>
        {isButtonDisabled ? (
          <Pressable style={[styles.button, styles.buttonMarginBottom, styles.buttonDisabled]} onPress={onImportSeed}>
            <Text style={styles.text}>Import</Text>
          </Pressable>
        ) : (
          <LinearGradient colors={theme.LINEAR_GRADIENT} style={theme.GRADIENT_BORDER}>
            <Text style={[theme.BUTTON_GRADIENT, styles.textCenter]} onPress={onImportSeed}>
              Import
            </Text>
          </LinearGradient>
        )}
      </View>
    </View>
  )
}
