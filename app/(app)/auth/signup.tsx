import { View, Text } from "react-native";
import { AppLogo, SignupForm } from "@/components/index";

export default (): JSX.Element => {
  return (
    <View className="w-[90%] mx-auto flex-1 flex-col items-center justify-center">
      <AppLogo small />
      <Text className="text-3xl text-white font-bold mt-2 mb-3">Uni-Pulse</Text>
      <Text className="text-lg text-white font-bold mb-8">Create Account</Text>
      <SignupForm />
    </View>
  );
};
