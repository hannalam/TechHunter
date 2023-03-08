/* eslint-disable react-native/no-inline-styles */
import React from "react";
import styled from "styled-components";
import { Text, Image, View } from "react-native";
import { Card, List } from "react-native-paper";
import { Favourite } from "../../services/favourites/favourite.component";

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
    name = "Jane Smith",
    photo = ["https://xsgames.co/randomusers/assets/avatars/male/44.jpg"],
    lastMessage = "Hello ,how are you?",
    time = "1 hour",
  } = client;

  return (
    <ChatCard elevation={5}>
      <ListRow>
        <>
          <View style={{ paddingLeft: 10 }} />
          <Name> {name} </Name>
          <View style={{ paddingLeft: 10 }} />
          <Image
            style={{ width: 35, height: 35 }}
            variant="image"
            source={{
              uri: photo[0],
            }}
          />
          <View style={{ paddingLeft: 10 }} />
          <Message>{lastMessage}</Message>
          <View style={{ paddingLeft: 25 }} />
          <Message>{time}</Message>
        </>
      </ListRow>
    </ChatCard>
  );
};

// export const ChatInfo = ({ client = {} }) => {
//   const {
//     name = "Data Analyst",
//     photo = ["https://xsgames.co/randomusers/assets/avatars/male/9.jpg"],
//     companyName = "Amazon",
//     chatRoom = "https://img.icons8.com/material-outlined/24/null/filled-chat.png",
//     submitForApproval = "https://img.icons8.com/material-outlined/24/null/submit-for-approval.png",
//   } = client;

//   return (
//     <CilentCard elevation={5}>
//       <ListRow>
//         <>
//           <Title> {name} </Title>
//           <Favourite client={client} />
//           <Image
//             style={{ width: 35, height: 35 }}
//             variant="image"
//             source={{
//               uri: photo[0],
//             }}
//           />
//           <View style={{ paddingLeft: 10 }} />
//           <CompanyName>{companyName}</CompanyName>
//           <View style={{ paddingLeft: 20 }} />
//           <Image
//             style={{ width: 30, height: 30 }}
//             variant="submit For Approval"
//             source={{
//               uri: submitForApproval,
//             }}
//           />
//           <View style={{ paddingLeft: 10 }} />
//           <Image
//             style={{ width: 30, height: 30 }}
//             variant="chatRoom"
//             source={{
//               uri: chatRoom,
//             }}
//           />
//         </>
//       </ListRow>
//     </CilentCard>
//   );
// };
