import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import { theme, ThemeContext } from "core/contexts";
import { $main } from "core/modules/main";
import { useStore } from "effector-react";
import { AppLayout } from "ui/app-layout/AppLayout";

export const App = () => {
  const { appeareance } = useStore($main);

  return (
    <ConfigProvider appearance={appeareance}>
      <AdaptivityProvider>
        <ThemeContext.Provider value={theme[appeareance]}>
          <AppLayout />
        </ThemeContext.Provider>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
