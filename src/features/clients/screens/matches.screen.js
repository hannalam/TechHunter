/* eslint-disable prettier/prettier */
import React from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import { CilentInfoCard } from "../components/client-info-card.component";
import styled from "styled-components";
import { SafeArea } from "../../../components/utility/safe-area.component";

const SearchContainer = styled.View`
    padding: 10px;
`;

const CilentList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 10,
    },
})``;

export const MatchesScreen = () => (
    <SafeArea>
        <SearchContainer>
            <Searchbar />
        </SearchContainer>
        <CilentList
            data={[{ name: 1 }]}
            renderItem={() => <CilentInfoCard />}
            keyExtractor={(item) => item.name}
        />
    </SafeArea>
);
