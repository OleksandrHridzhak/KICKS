import { config } from "@/shared/config";

type LoginDto = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const login = async (data: LoginDto) => {
  const response = await fetch(`${config.apiUrl}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
};
