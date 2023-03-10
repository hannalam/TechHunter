/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { MatchesScreen } from "../../features/clients/screens/matches.screen";
import { SafeArea } from "../../components/utility/safe-area.component";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";
import { ChatScreen } from "../../services/chatroom/chatscreen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Profile: "md-person-outline",
  Chat: "md-chatbox-outline",
  Matches: "md-home-outline",
  Bookmark: "md-bookmark-outline",
  Settings: "md-settings-outline",
};

const ListRow = styled(List.Section)`
  padding-top: 5px;
  padding-bottom: 5px;
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

const Profiles = () => (
  <SafeArea>
    <ListRow>
      <>
        <AvatarContainer>
          <Avatar.Icon size={100} icon="human" backgroundColor="#2182BD" />
          <View />
          <Text variant="label" style={{ padding: 5 }}>
            John Jason
          </Text>
          <Text variant="label">Data Analyst</Text>
        </AvatarContainer>

        <List.Section>
          <List.Item
            style={{ padding: 5 }}
            title="Identity"
            description="I graduated from University of London"
          />
          <List.Item
            style={{ padding: 5 }}
            title="Work Experience"
            description="0-1 year"
          />
          <List.Item style={{ padding: 5 }} title="Programming Languages" />
          <List.Item style={{ padding: 5 }} title="Skills" />
          <List.Item style={{ padding: 5 }} title="Education" />
          <List.Item
            style={{ padding: 5 }}
            title="Favorite"
            description="View your saved job"
            left={(props) => <List.Icon {...props} color="black" icon="book" />}
            //onPress={() => navigation.navigate("Favourites")}
          />
          <List.Item
            style={{ padding: 5 }}
            title="Logout"
            left={(props) => <List.Icon {...props} color="black" icon="door" />}
            //onPress={onLogout}
          />
        </List.Section>
      </>
    </ListRow>
  </SafeArea>
);

/* Setting page has changed to Profile page
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
); */

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
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={Profiles} />
    </Tab.Navigator>
  </NavigationContainer>
);
