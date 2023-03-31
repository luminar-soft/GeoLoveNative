import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  useFonts as useMontserrat,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { SafeArea } from "./src/components/utility/safe-area.component";

import { SvgXml } from "react-native-svg";

import menuProfileBlack from "./assets/menu-profile-black";
import menuProfileRed from "./assets/menu-profile-red";

import menuChatBlack from "./assets/menu-chat-black";
import menuChatRed from "./assets/menu-chat-red";

import menuLogoBlack from "./assets/menu-logo-black";
import menuLogoRed from "./assets/menu-logo-red";

const Tab = createBottomTabNavigator();

const Profile = () => (
  <SafeArea>
    <Text style={{ fontSize: 20, padding: 20 }}>Profile screen</Text>
  </SafeArea>
);
const Chat = () => (
  <SafeArea>
    <Text style={{ fontSize: 20, padding: 20 }}>Chat screen</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text style={{ fontSize: 20, padding: 20 }}>Map screen</Text>
  </SafeArea>
);

export default function App() {
  const [MontserratLoaded] = useMontserrat({
    Montserrat_400Regular,
  });

  if (!MontserratLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: ({ focused }) => {
                let iconXML;
                if (route.name === "Map") {
                  if (focused) {
                    iconXML = menuLogoRed;
                  } else {
                    iconXML = menuLogoBlack;
                  }
                } else if (route.name === "Chat") {
                  if (focused) {
                    iconXML = menuChatRed;
                  } else {
                    iconXML = menuChatBlack;
                  }
                } else if (route.name === "Profile") {
                  if (focused) {
                    iconXML = menuProfileRed;
                  } else {
                    iconXML = menuProfileBlack;
                  }
                }
                return <SvgXml xml={iconXML} width={39} height={39} />;
              },
              tabBarStyle: {
                backgroundColor: "#fff",
                borderTopWidth: 2,
                borderStyle: "solid",
                borderTopColor: "#FD0E46",
                height: 68,
              },
              headerShown: false,
            })}
            tabBarOptions={{
              activeTintColor: "#FD0E46",
              inactiveTintColor: "#1D1C17",
              showLabel: false,
            }}
          >
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
