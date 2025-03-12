import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { BadgeCheck } from "lucide-react-native";
import { ASSETS } from "@/constants";

export const AnnouncementsItem: React.FC = () => {
  return (
    <View className="flex flex-col gap-5 bg-white rounded-xl shadow-xs p-4">
      <View className="flex flex-row gap-2 items-center ">
        <Image
          source={ASSETS.SCHOOL_LOGO}
          className="h-[32px] w-[32px]"
          resizeMethod="resize"
          resizeMode="contain"
        />
        <View className="flex flex-col gap-1">
          <Text className="text-[14px] font-bold">
            UV Main - CETA Student Executives
          </Text>
          <Text className="text-sm text-gray-500">@UVCETA</Text>
        </View>
      </View>

      <View className="w-full h-[280px] bg-slate-100 !rounded-xl relative">
        <Image
          source={ASSETS.ANNOUNCEMENT_BANNER}
          resizeMode="cover"
          className="w-full h-full rounded-xl"
        />
        <View className="flex flex-row items-center gap-1 bg-white rounded-full absolute bottom-2 right-3 py-1 px-2">
          <BadgeCheck color="green" size={18} className="mt-2" />
          <Text className="text-sm">Authenticity Verified</Text>
        </View>
      </View>

      <Text className="text-[15px] text-gray-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, earum.
        Veniam sed, quisquam voluptatibus delectus rem ex at dolorem dolorum
        repellat. Autem eligendi voluptas sint quaerat quae minus alias ut
        excepturi quisquam, nostrum quo suscipit saepe ea officiis pariatur
        doloribus. Culpa aut deleniti ab ipsum maiores consequuntur sit laborum
        delectus.
      </Text>

      <Text className="text-sm text-right text-gray-800">
        Posted - March 12, 2025
      </Text>
    </View>
  );
};
