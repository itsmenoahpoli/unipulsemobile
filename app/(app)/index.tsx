import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Image } from "react-native";
import { ASSETS } from "@/constants/index";

export default (): JSX.Element => {
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      // router.replace("/(app)/auth/login");
    }, 2000);
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <Image source={ASSETS.BRAND_LOGO} className="w-48 h-48 mb-8" />
      <Text className="text-3xl text-white font-bold">Uni-Pulse</Text>
    </View>
  );
};
