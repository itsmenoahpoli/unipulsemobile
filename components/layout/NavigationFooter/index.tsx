import React from "react";
import { useRouter } from "expo-router";
import { View, Pressable } from "react-native";
import { House, Search, Plus, MessageCircle, User } from "lucide-react-native";
import { useAuth } from "@/hooks";
import { MyAccountModal, AnnouncementFormModal } from "@/components/modules";

type ModalsState = {
  profile: boolean;
  announcement: boolean;
};

const ICON_SIZE = 28;

export const NavigationFooter: React.FC = () => {
  const router = useRouter();
  const { isCurrentUserAdmin } = useAuth();
  const [modals, setModals] = React.useState<ModalsState>({
    profile: false,
    announcement: false,
  });

  const handleModal = (modal: keyof ModalsState, isOpen: boolean) => {
    setModals((prev) => ({ ...prev, [modal]: isOpen }));
  };
  const handleCloseModals = () => {
    setModals({ profile: false, announcement: false });
  };

  return (
    <>
      <MyAccountModal open={modals.profile} handleClose={handleCloseModals} />
      <AnnouncementFormModal
        open={modals.announcement}
        handleClose={handleCloseModals}
      />

      <View className="h-16 w-[85%] flex flex-row justify-between items-center bg-white rounded-full shadow-sm !px-[20px]">
        <Pressable onPress={() => router.push("/(app)/home/overview")}>
          <House size={ICON_SIZE} color="#555" />
        </Pressable>
        <Pressable onPress={() => router.push("/(app)/home/explore")}>
          <Search size={ICON_SIZE} color="#555" />
        </Pressable>
        {isCurrentUserAdmin() ? (
          <Pressable
            className="h-[40px] w-[40px] bg-green-900 border rounded-full justify-center items-center"
            onPress={() => handleModal("announcement", true)}
          >
            <Plus size={ICON_SIZE} color="#fff" />
          </Pressable>
        ) : null}
        <Pressable onPress={() => router.push("/(app)/home/forums")}>
          <MessageCircle size={ICON_SIZE} color="#555" />
        </Pressable>
        <Pressable onPress={() => handleModal("profile", true)}>
          <User size={ICON_SIZE} color="#555" />
        </Pressable>
      </View>
    </>
  );
};
