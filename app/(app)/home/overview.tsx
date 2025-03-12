import { View, Text, ImageBackground, ScrollView } from "react-native";
import { NavigationHeader, AnnouncementsList } from "@/components";
import { OrganizationBannersScroll } from "@/components";
import { ASSETS } from "@/constants";

export default (): JSX.Element => {
  return (
    <View className="flex-1 px-5 py-2">
      <NavigationHeader />

      <View className="flex-1 text-center pt-2 mt-3">
        <View className="flex flex-col gap-3">
          <OrganizationBannersScroll />

          <Text className="text-3xl font-bold mt-5">Announcements</Text>
        </View>

        <AnnouncementsList />
      </View>
    </View>
  );
};
