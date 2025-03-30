import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Image, Pressable } from "react-native";
import { ASSETS } from "@/constants";
import { useForumsService } from "@/services";
import { type Forum } from "@/types/models.type";

export const CommunityForumsList: React.FC<{ limit?: number | null }> = ({
  limit = null,
}) => {
  const router = useRouter();
  const { fetchForums } = useForumsService();
  const [forums, setForums] = React.useState<Forum[]>([]);

  const fetchForumsData = async () => {
    try {
      const data = await fetchForums();
      setForums(data);
    } catch (error) {
      console.error("Failed to fetch forums:", error);
    }
  };

  const handleGoToForum = (forum: any) => {
    router.push({
      pathname: "/(app)/home/forum-show",
      params: {
        forumId: forum.id,
        forumName: forum.name,
      },
    });
  };

  React.useEffect(() => {
    fetchForumsData();
    return () => setForums([]);
  }, []);

  const displayedForums = limit ? forums.slice(0, limit) : forums;

  if (forums.length === 0) {
    return (
      <View className="w-full h-[200px] flex flex-col items-center justify-center">
        <Text className="text-lg text-gray-600 font-medium">
          No Forums Available
        </Text>
        <Text className="text-sm text-gray-500 mt-1">
          Check back later for updates
        </Text>
        <Pressable onPress={fetchForumsData} className="mt-3">
          <Text className="text-sm text-blue-500">Refresh</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View className="flex flex-col gap-5 mt-5">
      {displayedForums.map((forum) => (
        <Pressable onPress={() => handleGoToForum(forum)} key={forum.name}>
          <View
            key={forum.name}
            className="bg-white flex flex-row items-center rounded-xl gap-3 py-3 px-4"
          >
            <Image
              source={forum.logo ? { uri: forum.logo } : ASSETS.SCHOOL_LOGO}
              resizeMethod="resize"
              resizeMode="contain"
              className="w-10 h-10 rounded-full border border-gray-200 bg-slate-200"
            />
            <View className="flex flex-col">
              <Text className="text-base font-medium">{forum.name}</Text>
              <Text className="text-md text-gray-500">&mdash; members</Text>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};
