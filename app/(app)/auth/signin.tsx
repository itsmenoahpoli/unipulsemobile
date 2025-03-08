import { View, Text } from "react-native";
import { AppLogo, SigninForm } from "@/components/index";

export default (): JSX.Element => {
  return (
    <View className="w-[90%] mx-auto flex-1 flex-col items-center justify-center gap-10">
      <AppLogo />
      <Text className="text-3xl text-white font-bold mb-8">Uni-Pulse</Text>
      <SigninForm />
    </View>
  );
};
