import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "react-native-toast-alert";
import { useRouter } from "expo-router";
import { useApi } from "@/hooks/index";
import { API_ROUTES } from "@/constants/index";
import { type SigninApiResponse } from "@/types/auth.type";
import { type SetLoadingType } from "@/types/common.type";

type SigninCredentials = {
  studentId: string;
  password: string;
};

export const useAuthService = () => {
  const router = useRouter();
  const { $baseApi } = useApi();

  const signinUser = async (
    credentials: SigninCredentials,
    setLoading: SetLoadingType
  ) => {
    return await $baseApi
      .post<SigninApiResponse>(API_ROUTES.AUTH_SIGNIN, credentials)
      .then(async (response) => {
        const { authToken, user } = response.data;

        await AsyncStorage.setItem("isAuthenticated", "1");
        await AsyncStorage.setItem("authToken", authToken);
        await AsyncStorage.setItem("authUser", JSON.stringify(user));

        Toast.info("Signed-in successfully, redirecting ...");

        setTimeout(() => {
          router.replace("/(app)/home/overview");
        }, 3000);
      })
      .catch((error) => {
        Toast.error("Failed to sign-in, please try again later");
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  return {
    signinUser,
  };
};
