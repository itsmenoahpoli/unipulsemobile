import { View } from "react-native";
import { Slot } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {} from "react-native-safe-area-context";

export default (): JSX.Element => {
  const insets = useSafeAreaInsets();

  return (
    <View className="w-full h-full bg-white">
      <View
        className="flex-1 w-full h-full"
        style={{
          marginTop: insets.top,
          marginBottom: insets.bottom,
        }}
      >
        <Slot />
      </View>
    </View>
  );
};
