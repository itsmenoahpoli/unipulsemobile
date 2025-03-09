import { z } from "zod";
import { authSchemas } from "@/schemas/index";

export type SignInFormData = z.infer<typeof authSchemas.signInSchema>;
