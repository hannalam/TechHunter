import React from "react";
import { FlatList } from "react-native";
import { ChatInfo } from "./chat-info";
import styled from "styled-components";
import { SafeArea } from "../../components/utility/safe-area.component";

const ChatList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 10,
  },
})``;

export const ChatScreen = () => (
  <SafeArea>
    <ChatList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
      renderItem={() => <ChatInfo />}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
