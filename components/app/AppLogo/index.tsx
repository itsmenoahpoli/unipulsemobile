import React from "react";
import { Image } from "react-native";
import { ASSETS } from "@/constants";

export const AppLogo: React.FC<{ size?: number; className?: string }> = ({
  size = 48,
  className,
}) => {
  return (
    <Image
      source={ASSETS.BRAND_LOGO}
      className={`w-${size} h-${size} ${className}`}
    />
  );
};
