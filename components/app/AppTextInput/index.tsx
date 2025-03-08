import React from "react";
import { View, TextInput, Text, type TextInputProps } from "react-native";

export const AppTextInput: React.FC<{ title?: string } & TextInputProps> = ({
  title,
  ...props
}) => {
  return (
    <View className="flex flex-col gap-3 w-full">
      {title ? <Text className="text-sm text-white">{title}</Text> : null}
      <TextInput className="w-full bg-white rounded-2xl py-4 px-3" {...props} />
    </View>
  );
};
