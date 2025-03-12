import { z } from "zod";
import { authSchemas } from "@/schemas";

export type SignInFormData = z.infer<typeof authSchemas.signInSchema>;
export type SignUpFormData = z.infer<typeof authSchemas.signUpSchema>;

export type SigninApiResponse = {
  user: {
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    id: number;
    userRoleId: number;
    studentId: string;
    firstName: string;
    middleName: string | null;
    lastName: string;
    email: string;
    isEnabled: boolean;
  };
  authToken: string;
};
