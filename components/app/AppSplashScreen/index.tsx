import React from "react";
import { ImageBackground, Image, Text } from "react-native";
import { ASSETS } from "@/constants";

export const AppSplashScreen: React.FC = () => {
  return (
    <ImageBackground
      className="flex-1 justify-center items-center"
      resizeMode="cover"
      source={ASSETS.AUTH_BG}
    >
      <Image source={ASSETS.BRAND_LOGO} className="w-64 h-64 mb-8" />
      <Text className="text-3xl text-white font-bold">Uni-Pulse</Text>
    </ImageBackground>
  );
};
