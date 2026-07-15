import jwt from "jsonwebtoken";

export const createAuthToken = (
  id: string,
  email: string,
  secret: string,
  expiresIn: number,
) => {
  return jwt.sign(
    {
      id,
      email,
    },
    secret,
    {
      expiresIn,
    },
  );
};
