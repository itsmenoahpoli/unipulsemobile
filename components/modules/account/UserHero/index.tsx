import React from "react";
import { View, Text, Pressable } from "react-native";
import { type AuthUser } from "@/types/auth.type";

export const UserHero: React.FC<{ user: AuthUser }> = (props) => {
  const { user } = props;

  const getFullnameInitials = () => {
    const firstName = user?.firstName || "";
    const lastName = user?.lastName || "";

    return `${firstName[0]}${lastName[0]}`;
  };

  return (
    <View className="flex flex-col gap-4">
      <View className="flex flex-row justify-between">
        <View className="flex flex-row gap-3 items-center">
          <View className="h-[36px] w-[36px] flex justify-center items-center bg-orange-600 shadow-sm rounded-full">
            <Text className="text-white font-bold">
              {getFullnameInitials()}
            </Text>
          </View>
          <View className="flex flex-col">
            <Text className="text-lg text-gray-700 font-medium">
              {user?.firstName} {user?.lastName}
            </Text>
            <Text className="text-sm text-gray-500">
              {user?.studentCourse || "-"}, {user?.studentYearLevel || "-"}
            </Text>
          </View>
        </View>

        <Pressable className="h-[30px] bg-red-500 rounded-lg justify-center px-2">
          <Text className="text-sm text-white font-medium">SIGN OUT</Text>
        </Pressable>
      </View>

      <Text className="font-medium">johndoe@domain.com</Text>
    </View>
  );
};
