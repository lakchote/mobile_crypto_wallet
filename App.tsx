import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

const white = "#fff"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ backgroundColor: white }}>Hello Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: white,
    flex: 1,
    justifyContent: "center",
  },
})
