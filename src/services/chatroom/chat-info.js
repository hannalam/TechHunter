/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import styled from "styled-components";
import { Text, Image, View } from "react-native";
import { Card, List } from "react-native-paper";

import { getChats } from "../../utils/server";

const ChatCard = styled(Card)`
    background-color: white;
    margin-bottom: 10px;
`;

const Name = styled(Text)`
    color: black;
    width: 100px;
`;

const Message = styled(Text)`
    color: black;
    align-items: center;
    width: 120px;
`;

const ListRow = styled(List.Section)`
    flex-direction: row;
    padding-top: 5px;
    padding-bottom: 5px;
    overflow: hidden;
    flex: 1;
`;

export const ChatInfo = () => {
    return (
        <>
            {getChats().map((chat, index) => (
                <ChatCard elevation={5} key={index}>
                    <ListRow>
                        <>
                            <View style={{ paddingLeft: 5 }} />
                            <Name> {chat.name} </Name>
                            <View style={{ paddingLeft: 5 }} />
                            <Image
                                style={{ width: 35, height: 35 }}
                                variant="image"
                                source={{
                                    uri: chat.photo,
                                }}
                            />
                            <View style={{ paddingLeft: 5 }} />
                            <Message>{chat.message}</Message>
                            <View style={{ paddingLeft: 10 }} />
                            <Message>{chat.time}</Message>
                        </>
                    </ListRow>
                </ChatCard>
            ))}
        </>
    );
};
