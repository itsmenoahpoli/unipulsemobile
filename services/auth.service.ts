import { Toast } from "react-native-toast-alert";
import { useApi } from "@/hooks/index";
import { API_ROUTES } from "@/constants/index";

type SigninCredentials = {
  studentId: string;
  password: string;
};

export const useAuthService = () => {
  const { $baseApi } = useApi();

  const signinUser = async (credentials: SigninCredentials) => {
    console.log(credentials);
    return await $baseApi
      .post(API_ROUTES.AUTH_SIGNIN, credentials)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        Toast.error("Failed to sign-in, please try again later");
        console.log(error);
      });
  };

  return {
    signinUser,
  };
};
