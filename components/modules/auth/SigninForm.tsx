import React from "react";
import { View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AppTextInput,
  AppCheckbox,
  AppLink,
  AppButton,
} from "@/components/app/index";
import { useAuthService } from "@/services/index";

const signInSchema = z.object({
  studentId: z.string().min(1, "Student ID is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

type SignInFormData = z.infer<typeof signInSchema>;

export const SigninForm: React.FC = () => {
  const { signinUser } = useAuthService();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      studentId: "",
      password: "",
      rememberMe: false,
    },
  });

  const handleFormSubmit = (data: SignInFormData) => {
    signinUser({
      studentId: data.studentId,
      password: data.password,
    });
  };

  return (
    <View className="w-full flex flex-col gap-4">
      <Controller
        control={control}
        name="studentId"
        render={({ field: { onChange, value } }) => (
          <AppTextInput
            placeholder="Student ID"
            value={value}
            onChangeText={onChange}
            title="Student ID"
            error={errors.studentId?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <AppTextInput
            placeholder="Password"
            secureTextEntry
            value={value}
            onChangeText={onChange}
            title="Password"
            error={errors.password?.message}
          />
        )}
      />

      <View className="flex flex-row justify-between">
        <Controller
          control={control}
          name="rememberMe"
          render={({ field: { onChange, value } }) => (
            <AppCheckbox
              title="Remember me"
              titleClassName="text-sm text-white"
              // onValueChange={onChange}
            />
          )}
        />
        <AppLink
          href="#"
          title="Forgot password?"
          titleClassName="text-sm text-blue-100 underline underline-offset-4"
        />
      </View>

      <AppButton
        title="Sign in"
        className="bg-[#58E99C] w-full rounded-full items-center p-3 mt-3"
        titleClassName="text-lg text-black font-bold"
        onPress={handleSubmit(handleFormSubmit)}
      />
    </View>
  );
};
