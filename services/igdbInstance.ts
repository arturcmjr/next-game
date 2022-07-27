import axios, { AxiosInstance } from "axios";

const igdbInstance = (): AxiosInstance => {
  const instance = axios.create();

  instance.interceptors.request.use((request) => {
    request.headers = {
      "Client-ID": process.env.IGDB_CLIENT_ID || "",
      Authorization: `Bearer ${process.env.IGDB_TOKEN}`,
    };
    return request;
  });

  return instance;
};

export default igdbInstance();
