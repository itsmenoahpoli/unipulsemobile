import React from "react";
import { useRouter } from "expo-router";
import { View, Pressable } from "react-native";
import { House, Search, Plus, MessageCircle, User } from "lucide-react-native";
import { MyAccountModal } from "@/components/modules/account/MyAccountModal";

const ICON_SIZE = 28;

export const NavigationFooter: React.FC = () => {
  const router = useRouter();

  const [profileOpen, setProfileOpen] = React.useState(false);

  const handleOpenProfile = () => setProfileOpen(true);
  const handleCloseProfile = () => {
    setProfileOpen(false);
  };

  return (
    <>
      <MyAccountModal open={profileOpen} handleClose={handleCloseProfile} />

      <View className="h-16 w-[85%] flex flex-row justify-between items-center bg-white rounded-full shadow-sm !px-[20px]">
        <Pressable>
          <House size={ICON_SIZE} color="#555" />
        </Pressable>
        <Pressable>
          <Search size={ICON_SIZE} color="#555" />
        </Pressable>
        <Pressable className="h-[40px] w-[40px] bg-green-900 border rounded-full justify-center items-center">
          <Plus size={ICON_SIZE} color="#fff" />
        </Pressable>
        <Pressable>
          <MessageCircle size={ICON_SIZE} color="#555" />
        </Pressable>
        <Pressable onPress={handleOpenProfile}>
          <User size={ICON_SIZE} color="#555" />
        </Pressable>
      </View>
    </>
  );
};
