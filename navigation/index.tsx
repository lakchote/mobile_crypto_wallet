import { createStackNavigator } from "@react-navigation/stack"
import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { Intro } from "../screens/Intro"
import { RootStackParamList } from "../types"
import LinkingConfiguration from "./LinkingConfiguration"
import { GetStart } from "../screens/GetStart"

const Stack = createStackNavigator<RootStackParamList>()

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="GetStart" component={GetStart} />
        <Stack.Screen name="Root" component={Intro} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
