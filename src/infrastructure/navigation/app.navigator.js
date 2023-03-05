import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { MatchesScreen } from "../../features/clients/screens/matches.screen";
import { SafeArea } from "../../components/utility/safe-area.component";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Profile: "md-person-outline",
  Chat: "md-chatbox-outline",
  Matches: "md-home-outline",
  Bookmark: "md-bookmark-outline",
  Settings: "md-settings-outline",
};

const Profile = () => (
  <SafeArea>
    <Text>Profile</Text>
  </SafeArea>
);
const Chat = () => (
  <SafeArea>
    <Text>Chat</Text>
  </SafeArea>
);
const Bookmark = () => (
  <SafeArea>
    <Text>Saved Job</Text>
  </SafeArea>
);
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerStyle: {
      backgroundColor: "#0095ff",
    },
    headerTitleStyle: {
      color: "black",
    },
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOption={{
        tabBarActiveTintColor: "#0095ff",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Matches" component={MatchesScreen} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);
