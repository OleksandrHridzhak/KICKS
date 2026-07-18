import { config } from "@/shared/config";

type RegisterDto = {
  firstName: string;
  lastName: string;
  gender: "male" | "female" | "other";
  email: string;
  password: string;
  rememberMe: boolean;
};

export const register = async (data: RegisterDto) => {
  const response = await fetch(`${config.apiUrl}/auth/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return response.json();
};
