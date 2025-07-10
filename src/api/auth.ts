import api from "./mainCaller";

type LoginResponseType = {
  expires_at: string;
  lifetime: number;
  token: string;
};

export const login = async (username: string, password: string) => {
  const { data } = await api.post<LoginResponseType>(
    `security/auth_check`,
    {
      _username: username,
      _password: password,
      _subdomain: import.meta.env.VITE_APP_SUBDOMAIN,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
};
