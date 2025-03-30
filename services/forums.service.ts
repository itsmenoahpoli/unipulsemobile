import { Alert } from "react-native";
import { useApi } from "@/hooks";
import { type FetchForumsApiResponse } from "@/types/responses.type";
import { type Forum } from "@/types/models.type";

export const useForumsService = () => {
  const { $baseApi } = useApi();

  const fetchForums = async () => {
    const response = await $baseApi.get<FetchForumsApiResponse>("/forums");

    return response.data;
  };

  const fetchForumPosts = async (forumId: number) => {
    const response = await $baseApi.get<Forum>(`/forums/${forumId}/posts`);

    return response.data;
  };

  const createForumPost = async (data: any) => {
    const response = await $baseApi.post(`/forums/${data.forumId}/posts`, data);

    if (response.status === 201) {
      Alert.alert("Success", "Post uploaded successfully");
    }
  };

  return {
    fetchForums,
    fetchForumPosts,
    createForumPost,
  };
};
