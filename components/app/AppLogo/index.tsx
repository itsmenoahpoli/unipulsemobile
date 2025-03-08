import React from "react";
import { Image } from "react-native";
import { ASSETS } from "@/constants";

export const AppLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Image source={ASSETS.BRAND_LOGO} className={`w-48 h-48 ${className}`} />
  );
};
