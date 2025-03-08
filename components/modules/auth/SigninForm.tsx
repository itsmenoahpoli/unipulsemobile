import React from "react";
import { View } from "react-native";
import {
  AppTextInput,
  AppCheckbox,
  AppLink,
  AppButton,
} from "@/components/app/index";

export const SigninForm: React.FC = () => {
  return (
    <View className="w-full flex flex-col gap-4">
      <AppTextInput placeholder="Student ID" />
      <AppTextInput placeholder="Password" secureTextEntry />
      <View className="flex flex-row justify-between">
        <AppCheckbox title="Remember me" titleClassName="text-sm text-white" />
        <AppLink
          href="#"
          title="Forgot password?"
          titleClassName="text-sm text-blue-100 underline underline-offset-4"
        />
      </View>
      <AppButton
        title="Sign in"
        className="bg-[#58E99C] w-full rounded-full items-center p-3 mt-3"
        titleClassName="text-lg text-black font-bold"
      />
    </View>
  );
};
