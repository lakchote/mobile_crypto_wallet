import { StatusBar } from "expo-status-bar"
import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import useFonts from "./hooks/useFonts"
import Navigation from "./navigation"

export default function App() {
  const isLoadingComplete = useFonts()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    )
  }
}
