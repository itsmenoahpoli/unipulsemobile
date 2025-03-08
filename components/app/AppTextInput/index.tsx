import React from "react";
import { View, TextInput, Text, type TextInputProps } from "react-native";

export const AppTextInput: React.FC<{ title?: string } & TextInputProps> = ({
  title,
  ...props
}) => {
  return (
    <View className="flex flex-col gap-3">
      {title ? <Text>{title}</Text> : null}
      <TextInput {...props} />
    </View>
  );
};
