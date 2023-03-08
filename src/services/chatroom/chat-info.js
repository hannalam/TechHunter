/* eslint-disable react-native/no-inline-styles */
import React from "react";
import styled from "styled-components";
import { Text, Image, View } from "react-native";
import { Card, List } from "react-native-paper";

const ChatCard = styled(Card)`
  background-color: white;
  margin-bottom: 10px;
`;

const Name = styled(Text)`
  color: black;
  align-items: center;
`;

const Message = styled(Text)`
  color: black;
  align-items: center;
`;

const ListRow = styled(List.Section)`
  flex-direction: row;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const ChatInfo = ({ client = {} }) => {
  const {
    name = "Jarno Trulli",
    photo = ["https://xsgames.co/randomusers/assets/avatars/male/44.jpg"],
    lastMessage = "Hi, I am interested in this job",
    time = "1 hr",
  } = client;

  return (
    <ChatCard elevation={5}>
      <ListRow>
        <>
          <View style={{ paddingLeft: 5 }} />
          <Name> {name} </Name>
          <View style={{ paddingLeft: 5 }} />
          <Image
            style={{ width: 35, height: 35 }}
            variant="image"
            source={{
              uri: photo[0],
            }}
          />
          <View style={{ paddingLeft: 5 }} />
          <Message>{lastMessage}</Message>
          <View style={{ paddingLeft: 10 }} />
          <Message>{time}</Message>
        </>
      </ListRow>
    </ChatCard>
  );
};
