import { View, Text, ImageBackground, ScrollView } from "react-native";
import { NavigationHeader, AnnouncementsList } from "@/components";
import { OrganizationBannersScroll } from "@/components";
import { ASSETS } from "@/constants";

export default (): JSX.Element => {
  return (
    <View className="flex-1 px-5 py-2">
      <NavigationHeader />

      <View className="flex-1 text-center pt-2 mt-3">
        <View className="flex mb-5">
          <OrganizationBannersScroll />
        </View>

        <Text className="text-3xl font-bold">Announcements</Text>
        <AnnouncementsList />
      </View>
    </View>
  );
};
