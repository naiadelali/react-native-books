import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Routes } from "./src/modules/common/routes";

import { useFonts } from 'expo-font';
import fonts from "./src/assets/fonts/fonts";


export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

