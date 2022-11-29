import AsyncStorage from "@react-native-async-storage/async-storage"
import * as React from "react"
import styles from "./styles"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import axios from "axios"
import { POLKADOT_PROXY_GET_BALANCE_ENDPOINT } from "@env"

export default function Home() {
  const [accountAddress, setAccountAddress] = React.useState<string | null>(null)
  const [accountBalance, setAccountBalance] = React.useState<string | null>(null)
  const getAccountAddress = () => {
    AsyncStorage.getItem("account_address").then((value) => setAccountAddress(value))
  }

  const onHome = () => {
    axios
      .get(POLKADOT_PROXY_GET_BALANCE_ENDPOINT)
      .then((res) => {
        setAccountBalance(res.data)
        AsyncStorage.setItem("account_balance", res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  React.useEffect(() => {
    getAccountAddress()
    onHome()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textColor}>Account :</Text>
        <Text style={styles.text}>{accountAddress}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textColor}>Balance :</Text>
        <Text style={styles.text}>{accountBalance} WND (DOT for testnet)</Text>
      </View>
    </SafeAreaView>
  )
}
