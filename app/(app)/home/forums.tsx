import { View, Text } from "react-native";
import { SearchInput } from "@/components";

export default (): JSX.Element => {
  return (
    <View className="flex-1 px-5 py-2">
      <Text className="text-lg font-bold">Forums</Text>

      <View className="flex-1 text-center mt-3">
        <SearchInput />
      </View>
    </View>
  );
};
