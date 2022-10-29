import { DefaultUpdateConfigData } from "@vkontakte/vk-bridge";
import { setAppeareance } from "core/modules/main";
import { vkBridge } from "./instance";

vkBridge.subscribe(({ detail }) => {
  const { type, data } = detail;
  if (type === "VKWebAppUpdateConfig") {
    const d = data as DefaultUpdateConfigData;
    setAppeareance(d.appearance);
  }
});
vkBridge.send("VKWebAppInit");
