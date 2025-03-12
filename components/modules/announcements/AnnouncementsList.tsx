import React from "react";
import { View, ScrollView } from "react-native";
import { AnnouncementsItem } from "./AnnouncementItem";

export const AnnouncementsList: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1 !mt-5">
      <View className="flex flex-col gap-3 !pb-[40px]">
        <AnnouncementsItem />
        <AnnouncementsItem />
        <AnnouncementsItem />
        <AnnouncementsItem />
        <AnnouncementsItem />
        <AnnouncementsItem />
      </View>
    </ScrollView>
  );
};
