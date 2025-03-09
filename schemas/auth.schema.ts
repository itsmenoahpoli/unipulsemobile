import { z } from "zod";

export const authSchemas = {
  signInSchema: z.object({
    studentId: z.string().min(1, "Student ID is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    rememberMe: z.boolean().optional(),
  }),
} as const;
