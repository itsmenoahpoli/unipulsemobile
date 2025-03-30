import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import { SendIcon, ArrowLeft } from "lucide-react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useForumsService } from "@/services";
import { ForumPost } from "@/types/models.type";

type ForumParams = {
  forumId: string;
  forumName: string;
};

export default function ForumScreen() {
  const router = useRouter();
  const { fetchForumPosts } = useForumsService();
  const { forumId, forumName } = useLocalSearchParams<ForumParams>();
  const [posts, setPosts] = React.useState<any>([]);

  const handleGoBack = () => {
    router.back();
  };

  const fetchPosts = async () => {
    try {
      const data = await fetchForumPosts(Number(forumId));
      setPosts(data);
    } catch (error) {
      console.error("Failed to fetch forum posts:", error);
    }
  };

  React.useEffect(() => {
    fetchPosts();
    return () => setPosts([]);
  }, [forumId]);

  return (
    <View className="flex-1 bg-white px-4 py-2">
      <View className="flex-row items-center mt-4">
        <Pressable onPress={handleGoBack} className="mr-3">
          <ArrowLeft size={24} color="#000" />
        </Pressable>
        <View className="flex-1">
          <Text className="text-lg font-bold text-gray-800">{forumName}</Text>
          <Text className="text-sm text-gray-500">- members</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
        {posts.map((post: ForumPost) => (
          <View key={post.id} className="bg-gray-100 rounded-2xl p-4 mb-3">
            <View className="flex-row items-center mb-2">
              <View className="w-10 h-10 rounded-full bg-orange-600 border border-gray-200 mr-3" />
              <Text className="font-semibold text-gray-800">
                {/** @ts-ignore */}
                {`${post.user.firstName} ${post.user.lastName}`}
              </Text>
            </View>
            <Text className="text-gray-600 text-sm">{post.content}</Text>
            <Text className="text-xs text-gray-400 mt-2">
              {/** @ts-ignore */}
              {new Date(post.createdAt).toLocaleTimeString()}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2 mt-3">
        <TextInput
          placeholder="Hello..."
          className="flex-1 text-gray-700 text-base"
        />
        <SendIcon size={24} className="text-gray-500" />
      </View>
    </View>
  );
}
