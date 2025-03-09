import { View, Text, Pressable } from "react-native";
import { NavigationHeader } from "@/components";
import { useAuthService } from "@/services/index";

export default (): JSX.Element => {
  const { signoutUser } = useAuthService();

  return (
    <View className="flex-1 px-5 py-2">
      <NavigationHeader />

      <View className="mt-3">
        <Text>Home page</Text>
      </View>

      <Pressable onPress={signoutUser}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  );
};
