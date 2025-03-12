import React from "react";
import { TextInput } from "react-native";

export const SearchInput: React.FC = () => {
  return (
    <TextInput
      className="h-[40px] w-full rounded-full bg-white px-4"
      placeholder="Search"
      placeholderTextColor="#888"
    />
  );
};
