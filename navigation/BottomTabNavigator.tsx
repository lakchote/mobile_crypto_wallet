import { Ionicons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import * as React from "react"
import { BottomTabParamList } from "../types"
import Home from "../screens/Tab/Home"
import Contact from "../screens/Tab/Contact"
import Send from "../screens/Tab/Send"

const Tab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: "#181E25" }, headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-people" color={color} />,
        }}
      />
      <Tab.Screen
        name="Send"
        component={Send}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-send" color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>["name"]; color: string }) {
  return <Ionicons size={30} {...props} />
}
