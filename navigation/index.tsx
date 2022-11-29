import { createStackNavigator } from "@react-navigation/stack"
import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { Intro } from "../screens/Intro"
import { RootStackParamList } from "../types"
import LinkingConfiguration from "./LinkingConfiguration"
import { GetStart } from "../screens/GetStart"
import BottomTabNavigator from "./BottomTabNavigator"
import { ImportSeed } from "../screens/ImportSeed"
import { CreateWallet } from "../screens/CreateWallet"

const Stack = createStackNavigator<RootStackParamList>()

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="GetStart" component={GetStart} />
        <Stack.Screen name="ImportSeed" component={ImportSeed} />
        <Stack.Screen name="CreateWallet" component={CreateWallet} />
        <Stack.Screen name="Root" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
