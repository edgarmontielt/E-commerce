import axios from "axios";
import { URL } from "config";

const instance = axios.create({
  baseURL: URL,
});

const get = async (url) => {
  return await instance.get(url, {
    withCredentials: true,
  });
};

const post = async (url, data) => {
  return await instance.post(url, data, {
    withCredentials: true,
  });
};

const postSSR = async (url, data, config) => {
  return await instance.post(url, data, config);
};

export { get, post, postSSR };
