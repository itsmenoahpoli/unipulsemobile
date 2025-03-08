import React from "react";
import { Pressable, Text, type PressableProps } from "react-native";

export const AppButton: React.FC<
  {
    title: string;
    className?: string;
    titleClassName?: string;
  } & PressableProps
> = ({ title, className, titleClassName, ...buttonProps }) => {
  return (
    <Pressable className={className} {...buttonProps}>
      <Text className={titleClassName}>{title}</Text>
    </Pressable>
  );
};
