import { vkBridge } from "./instance";

export const setStorageValue = async ({
  key,
  value,
}: {
  key: string;
  value: any;
}) => {
  return vkBridge
    .send("VKWebAppStorageSet", { key, value: JSON.parse(value) })
    .then((res) => res.result);
};

export const getStorageKeys = async () => {
  return vkBridge.send("VKWebAppStorageGetKeys").then((res) => res.keys);
};

export const getStorage = async (keys: string[]) => {
  return vkBridge.send("VKWebAppStorageGet", { keys }).then((res) => res.keys);
};
