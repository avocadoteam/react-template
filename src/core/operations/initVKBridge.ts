import bridge, { DefaultUpdateConfigData } from "@vkontakte/vk-bridge";
import { setAppeareance } from "core/modules/main";

const subscribeVKBridge = async () => {
  bridge.subscribe(({ detail }) => {
    const { type, data } = detail;
    if (type === "VKWebAppUpdateConfig") {
      const d = data as DefaultUpdateConfigData;
      setAppeareance(d.appearance);
    }
  });
};

subscribeVKBridge();
bridge.send("VKWebAppInit");
