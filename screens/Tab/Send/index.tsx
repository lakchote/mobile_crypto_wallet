import AsyncStorage from "@react-native-async-storage/async-storage"
import * as React from "react"
import styles from "./styles"
import { Linking, Pressable, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import axios from "axios"
import { POLKADOT_PROXY_SEND_ENDPOINT, POLKADOT_EXPLORER } from "@env"
import { LinearGradient } from "expo-linear-gradient"
import SelectDropdown from "react-native-select-dropdown"
import theme from "../../../styles/theme"

export default function Send() {
  const [contactAddress, setContactAddress] = React.useState<string | null>(null)
  const [accountBalance, setAccountBalance] = React.useState<string | null>(null)
  const [contactLabel, setContactLabel] = React.useState<string | null>(null)
  const [walletAddress, setWalletAddress] = React.useState<string | null>(null)
  const [amount, setAmount] = React.useState<string | null>(null)
  const [isButtonDisabled, setIsButtonDisabled] = React.useState<boolean>(true)
  const [isError, setIsError] = React.useState<boolean>(false)
  const [isErrorBalance, setIsErrorBalance] = React.useState<boolean>(false)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [txHash, setTxHash] = React.useState<string | null>(null)

  const getContactAddress = () => {
    AsyncStorage.getItem("contact_address").then((value) => {
      setContactAddress(value)
    })
  }

  const getAccountBalance = () => {
    AsyncStorage.getItem("account_balance").then((value) => setAccountBalance(value))
  }

  const getContactLabel = () => {
    AsyncStorage.getItem("contact_label").then((value) => {
      setContactLabel(value)
    })
  }

  const onWalletAddressChange = (val: string) => {
    setWalletAddress(val)
  }
  const onAmountChange = (val: string) => {
    setAmount(val)
  }

  const openExplorerURL = (url: string) => {
    Linking.openURL(url)
  }

  const onSend = () => {
    setTxHash(null)
    if (accountBalance && amount && accountBalance.replace(/,/g, "") <= amount) {
      setIsErrorBalance(true)
      return
    } else {
      setIsErrorBalance(false)
    }

    setIsLoading(true)
    axios
      .post(POLKADOT_PROXY_SEND_ENDPOINT, {
        recipient: walletAddress,
        amount: amount,
      })
      .then((res) => {
        setTxHash(res.data)
        setIsLoading(false)
      })
      .catch(() => {
        setIsError(true)
        setIsLoading(false)
      })
  }

  React.useEffect(() => {
    getContactAddress()
    getContactLabel()
    getAccountBalance()
  }, [])

  React.useEffect(() => {
    if (walletAddress?.length === 48 && amount) {
      setIsButtonDisabled(false)
    }
  }, [walletAddress, amount])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textColor}>Send Money</Text>
        <Text style={styles.textColor}>1 Unit = 1000000000000</Text>
      </View>
      {contactLabel && (
        <SelectDropdown
          defaultButtonText="Use your contact"
          buttonStyle={styles.selectButton}
          data={[contactLabel]}
          onSelect={() => {
            setWalletAddress(contactAddress)
          }}
          buttonTextAfterSelection={(selectedItem) => {
            return selectedItem
          }}
          rowTextForSelection={(item) => {
            return item
          }}
        />
      )}
      <View style={styles.paddingTop50}>
        <Text style={[styles.text, styles.marginX10]}>
          Account balance : {accountBalance} WND {"\n"} (DOT for testnet)
        </Text>
        <TextInput
          onChangeText={(e) => onWalletAddressChange(e)}
          placeholder="Account address"
          placeholderTextColor="#6A84A0"
          value={walletAddress ?? ""}
          style={styles.textInput}
        />
        <TextInput
          onChangeText={(e) => onAmountChange(e)}
          placeholder="Amount (1 Unit = 1000000000000)"
          placeholderTextColor="#6A84A0"
          value={amount ?? ""}
          style={styles.textInput}
        />
      </View>
      {isLoading && (
        <View>
          <Text style={styles.text}>Sending...</Text>
        </View>
      )}
      {isError && (
        <View>
          <Text style={styles.textRed}>An error occured.</Text>
        </View>
      )}
      {isErrorBalance && (
        <View>
          <Text style={styles.textRed}>Your balance is insufficient.</Text>
        </View>
      )}
      {txHash && (
        <View style={styles.marginX10}>
          <Text style={styles.txSuccess}>Transaction success!</Text>

          <Text style={styles.textAccent} onPress={() => openExplorerURL(`${POLKADOT_EXPLORER}${txHash}`)}>
            <Text>
              {POLKADOT_EXPLORER}
              {txHash}
            </Text>
          </Text>
        </View>
      )}

      <View style={styles.buttonToBottom}>
        {isButtonDisabled ? (
          <Pressable style={[styles.button, styles.buttonMarginBottom, styles.buttonDisabled]}>
            <Text style={styles.text}>Send</Text>
          </Pressable>
        ) : (
          <LinearGradient colors={theme.LINEAR_GRADIENT} style={theme.GRADIENT_BORDER}>
            <Text style={[theme.BUTTON_GRADIENT, styles.textCenter]} onPress={() => onSend()}>
              <Text>Send</Text>
            </Text>
          </LinearGradient>
        )}
      </View>
    </SafeAreaView>
  )
}
