import React from "react";
import { Bell } from "lucide-react-native";
import { View, Text, Pressable, Image } from "react-native";
import { useAuth } from "@/hooks";
import { ASSETS } from "@/constants";

export const NavigationHeader: React.FC = () => {
  const {
    authUserData: { authUser },
  } = useAuth();

  return (
    <View className="flex flex-row justify-between w-full py-3">
      <View className="flex flex-row gap-2 items-center">
        {/* <View className="h-[24px] w-[24px] rounded-full bg-slate-100 border border-gray-200" /> */}
        <Image
          source={ASSETS.SCHOOL_LOGO}
          className="h-[32px] w-[32px]"
          resizeMethod="resize"
          resizeMode="contain"
        />
        <Text className="text-[15px] font-extrabold">
          Hello, {authUser?.firstName} {authUser?.lastName} - CETA
        </Text>
      </View>

      <Pressable>
        <Bell color="#333333" />
      </Pressable>
    </View>
  );
};
