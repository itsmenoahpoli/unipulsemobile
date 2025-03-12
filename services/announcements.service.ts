import { useApi } from "@/hooks";
import { type AnnouncementsApiResponse } from "@/types/responses.type";
import { Announcement } from "../types/models.type";

export const useAnnouncementsService = () => {
  const { $baseApi } = useApi();

  const fetchAnnouncements = async () => {
    const response = await $baseApi.get<AnnouncementsApiResponse>(
      "/announcements"
    );

    return response.data;
  };

  return {
    fetchAnnouncements,
  };
};
