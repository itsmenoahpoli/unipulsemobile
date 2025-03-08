import React from "react";
import { useRouter } from "expo-router";
import { View, Text, ActivityIndicator } from "react-native";
import { AppLogo } from "@/components/index";

export default (): JSX.Element => {
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      // router.replace("/(app)/auth/signin");
    }, 2500);
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <AppLogo className="mb-8" />
      <Text className="text-3xl text-white font-bold">Uni-Pulse</Text>
      <ActivityIndicator />
    </View>
  );
};
