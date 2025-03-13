import React from "react";
import { View, Text, ScrollView } from "react-native";

const announcementBoards = ["upcoming", "ongoing", "completed"];

export const AnnouncementBoards: React.FC = () => {
  return (
    <View className="flex-1">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        className="flex-1"
        horizontal
      >
        <View className="flex flex-row gap-5">
          {announcementBoards.map((a) => (
            <View
              key={a}
              className="h-[130px] w-[140px] bg-slate-200 rounded-xl relative"
            >
              <View className="w-full flex justify-center items-center absolute bottom-3">
                <View className="w-[85%] py-2 bg-[rgba(255,255,255,0.35)] rounded-xl">
                  <Text className="text-sm font-bold text-center capitalize">
                    {a}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
