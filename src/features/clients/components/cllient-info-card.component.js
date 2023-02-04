/* eslint-disable react-native/no-inline-styles */
import React from "react";
import styled from "styled-components";
import { Text, Image, View } from "react-native";
import { Card, List } from "react-native-paper";

const CilentCard = styled(Card)`
  background-color: white;
  margin-bottom: 10px;
`;

const Title = styled(Text)`
  color: black;
  align-items: center;
`;

const CompanyName = styled(Text)`
  color: black;
  align-items: center;
`;

const ListRow = styled(List.Section)`
  flex-direction: row;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const CilentInfoCard = ({ client = {} }) => {
  const {
    name = "Data Analyst",
    photo = ["https://xsgames.co/randomusers/assets/avatars/male/9.jpg"],
    companyName = "Amazon",
    chatRoom = "https://img.icons8.com/material-outlined/24/null/filled-chat.png",
    bookMark = "https://img.icons8.com/material-outlined/24/null/bookmark-ribbon--v1.png",
    submitForApproval = "https://img.icons8.com/material-outlined/24/null/submit-for-approval.png",
  } = client;

  return (
    <CilentCard elevation={5}>
      <ListRow>
        <>
          <Title> {name} </Title>
          <Image
            style={{ width: 35, height: 35 }}
            variant="image"
            source={{
              uri: photo[0],
            }}
          />
          <View style={{ paddingLeft: 10 }} />
          <CompanyName>{companyName}</CompanyName>
          <View style={{ paddingLeft: 20 }} />
          <Image
            style={{ width: 30, height: 30 }}
            variant="bookMark"
            source={{
              uri: bookMark,
            }}
          />
          <View style={{ paddingLeft: 10 }} />
          <Image
            style={{ width: 30, height: 30 }}
            variant="submit For Approval"
            source={{
              uri: submitForApproval,
            }}
          />
          <View style={{ paddingLeft: 10 }} />
          <Image
            style={{ width: 30, height: 30 }}
            variant="chatRoom"
            source={{
              uri: chatRoom,
            }}
          />
        </>
      </ListRow>
    </CilentCard>
  );
};
