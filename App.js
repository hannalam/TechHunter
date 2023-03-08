import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "react-native-paper";
import { Navigation } from "./src/infrastructure/navigation";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context.js";

//this is the main structure of Tech Hunter app
export default function App() {
  return (
    <>
      <ThemeProvider>
        <FavouritesContextProvider>
          <Navigation />
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
