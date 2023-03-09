/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import styled from "styled-components";
import { Text, Image, View } from "react-native";
import { Card, List } from "react-native-paper";
import { Favourite } from "../../../services/favourites/favourite.component";

import { getCandidates } from "../../../utils/server";

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

const chatRoomImgURL =
    "https://img.icons8.com/material-outlined/24/null/filled-chat.png";
const submitImgURL =
    "https://img.icons8.com/material-outlined/24/null/submit-for-approval.png";

export const CilentInfoCard = () => {
    return (
        <>
            {getCandidates().map((candidate) => (
                <CilentCard elevation={5}>
                    <ListRow>
                        <>
                            <Title> {candidate.name} </Title>
                            <Favourite client={candidate} />
                            <Image
                                style={{ width: 35, height: 35 }}
                                variant="image"
                                source={{
                                    uri: candidate.photo,
                                }}
                            />
                            <View style={{ paddingLeft: 10 }} />
                            <CompanyName>{candidate.company}</CompanyName>
                            <View style={{ paddingLeft: 20 }} />
                            <Image
                                style={{ width: 30, height: 30 }}
                                variant="submit For Approval"
                                source={{
                                    uri: submitImgURL,
                                }}
                            />
                            <View style={{ paddingLeft: 10 }} />
                            <Image
                                style={{ width: 30, height: 30 }}
                                variant="chatRoom"
                                source={{
                                    uri: chatRoomImgURL,
                                }}
                            />
                        </>
                    </ListRow>
                </CilentCard>
            ))}
        </>
    );
};
