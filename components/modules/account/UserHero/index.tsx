import React from "react";
import { View, Text } from "react-native";
import { type AuthUser } from "@/types/auth.type";

export const UserHero: React.FC<{ user: AuthUser }> = (props) => {
  const { user } = props;

  return (
    <View className="flex flex-col gap-4">
      <View className="flex flex-row gap-3 items-center ">
        <View className="h-[36px] w-[36px] bg-slate-900 shadow-sm rounded-full" />
        <View className="flex flex-col">
          <Text className="text-[14px] text-gray-700 font-medium">
            {user?.firstName} {user?.lastName}
          </Text>
          <Text className="text-sm text-gray-500">
            {user?.studentCourse || "-"}, {user?.studentYearLevel || "-"}
          </Text>
        </View>
      </View>

      <Text className="font-medium">johndoe@domain.com</Text>
    </View>
  );
};
