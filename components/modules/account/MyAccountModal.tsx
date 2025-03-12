import React from "react";
import { View, Text, Pressable, Modal } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const MyAccountModal: React.FC<{
  open: boolean;
  handleClose: () => void;
}> = (props) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar style="dark" />
      <View className="flex-1 items-center justify-center bg-gray-100">
        <Modal
          animationType="slide"
          transparent={false}
          visible={props.open}
          onRequestClose={() => props.handleClose()}
        >
          <View
            className="flex-1"
            style={{
              marginTop: insets.top,
              marginBottom: insets.bottom,
            }}
          >
            <View className="p-5">
              <Text className="text-3xl font-bold">Manage Profile</Text>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};
