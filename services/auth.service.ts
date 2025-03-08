import { useApi } from "@/hooks/index";
import { API_ROUTES } from "@/constants/index";

type SigninCredentials = {
  studentId: string;
  password: string;
};

export const useAuthService = () => {
  const { $baseApi } = useApi();

  const signinUser = async (credentials: SigninCredentials) => {
    return await $baseApi.post(API_ROUTES.AUTH_SIGNIN, credentials);
  };

  return {
    signinUser,
  };
};
