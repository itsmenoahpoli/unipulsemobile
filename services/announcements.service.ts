import { useApi } from "@/hooks";

export const useAnnouncementsService = () => {
  const { $baseApi } = useApi();

  const fetchAnnouncements = async () => {
    const response = await $baseApi.get("/announcements");
    return response.data;
  };

  return {
    fetchAnnouncements,
  };
};
