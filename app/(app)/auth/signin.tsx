import { View } from "react-native";
import { AppLogo, SigninForm } from "@/components/index";

export default (): JSX.Element => {
  return (
    <View className="flex-1 flex-col items-center justify-center gap-10">
      <AppLogo />
      <SigninForm />
    </View>
  );
};
