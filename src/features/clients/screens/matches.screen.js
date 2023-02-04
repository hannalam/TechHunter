import React from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import { CilentInfoCard } from "../components/cllient-info-card.component";
import styled from "styled-components";
import { SafeArea } from "../../../components/utility/safe-area.component";

const SearchContainer = styled.View`
  padding: 16px;
`;

const CilentList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const MatchesScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <CilentList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
      ]}
      renderItem={() => <CilentInfoCard />}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
