import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components";

//Safe area is to make sure the app is render everything in both IOS and android
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
