import { DefaultUpdateConfigData } from "@vkontakte/vk-bridge";
import { theme } from "core/contexts";
import { setAppeareance } from "core/modules/main";
import { vkBridge } from "./instance";

export const vkBridgeInit = () => {
  vkBridge.subscribe(({ detail }) => {
    const { type, data } = detail;
    if (type === "VKWebAppUpdateConfig") {
      const d = data as DefaultUpdateConfigData;
      setAppeareance(d.appearance);
      if (vkBridge.supports("VKWebAppSetViewSettings")) {
        const isLight = d.appearance === "light";
        vkBridge.send("VKWebAppSetViewSettings", {
          status_bar_style: isLight ? "dark" : "light",
          action_bar_color: isLight ? theme.light.appBg : theme.dark.appBg,
        });
      }
    }
  });
  vkBridge.send("VKWebAppInit");
};
