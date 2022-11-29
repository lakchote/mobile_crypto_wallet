import * as React from "react"
import styles from "./styles"
import { Pressable, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"
import theme from "../../../styles/theme"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Contact() {
  const [accountAddress, setAccountAddress] = React.useState<string | null>(null)
  const [accountLabel, setAccountLabel] = React.useState<string | null>(null)
  const [contactAddress, setContactAddress] = React.useState<string | null>(null)
  const [contactLabel, setContactLabel] = React.useState<string | null>(null)
  const [isButtonDisabled, setIsButtonDisabled] = React.useState<boolean>(true)

  const getContactAddress = () => {
    AsyncStorage.getItem("contact_address").then((value) => setContactAddress(value))
  }

  const getContactLabel = () => {
    AsyncStorage.getItem("contact_label").then((value) => setContactLabel(value))
  }

  const onClear = () => {
    setContactLabel(null)
    setContactAddress(null)
    AsyncStorage.removeItem("contact_address")
    AsyncStorage.removeItem("contact_label")
  }

  const onAccountAddressChange = (val: string) => {
    setAccountAddress(val)
  }
  const onAccountLabelChange = (val: string) => {
    setAccountLabel(val)
  }
  const onCreateContact = () => {
    if (accountAddress && accountLabel) {
      AsyncStorage.setItem("contact_address", accountAddress)
      AsyncStorage.setItem("contact_label", accountLabel)
      setContactLabel(accountLabel)
      setContactAddress(accountAddress)
    }
  }

  React.useEffect(() => {
    getContactAddress()
    getContactLabel()
  }, [])

  React.useEffect(() => {
    if (accountLabel && accountAddress?.length === 48) {
      setIsButtonDisabled(false)
    }
  }, [accountLabel, accountAddress])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.textColor, styles.marginBottom5]}>Your contact</Text>
        {!contactLabel && <Text style={styles.text}>You don't have any contact yet ! Add the one below:</Text>}
        {contactLabel && (
          <View>
            <Text style={styles.text}>{contactLabel}</Text>
            <Text style={[styles.text, styles.marginBottom5]}>{contactAddress}</Text>
            <Text style={[styles.text, styles.textRed]} onPress={() => onClear()}>
              <Text>Clear</Text>
            </Text>
          </View>
        )}
      </View>
      {!contactLabel && (
        <>
          <View style={styles.paddingTop50}>
            <TextInput
              onChangeText={(e) => onAccountLabelChange(e)}
              placeholder="Account Label"
              placeholderTextColor="#6A84A0"
              style={styles.textInput}
            />
            <TextInput
              onChangeText={(e) => onAccountAddressChange(e)}
              placeholder="Account Address"
              placeholderTextColor="#6A84A0"
              style={styles.textInput}
            />
          </View>
          <View style={styles.buttonToBottom}>
            {isButtonDisabled ? (
              <Pressable style={[styles.button, styles.buttonMarginBottom, styles.buttonDisabled]}>
                <Text style={styles.text}>Import</Text>
              </Pressable>
            ) : (
              <LinearGradient colors={theme.LINEAR_GRADIENT} style={theme.GRADIENT_BORDER}>
                <Text style={[theme.BUTTON_GRADIENT, styles.textCenter]} onPress={() => onCreateContact()}>
                  <Text>Import</Text>
                </Text>
              </LinearGradient>
            )}
          </View>
        </>
      )}
    </SafeAreaView>
  )
}
