import * as Font from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import * as React from "react"

export default function useFonts() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync()

        await Font.loadAsync({
          archivo: require("../assets/fonts/Archivo-Regular.ttf"),
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
