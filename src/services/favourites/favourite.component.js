import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "./favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 8px;
  right: 20px;
  z-index: 9;
`;

export const Favourite = ({ job }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);
  const isFavourite = favourites.find((r) => r.placeId === job.placeId);

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(job)
          : removeFromFavourites(job)
      }
    >
      <AntDesign
        name={isFavourite ? "book" : "book"}
        size={24}
        color={isFavourite ? "red" : "black"}
      />
    </FavouriteButton>
  );
};
