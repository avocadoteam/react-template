import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./App.scss";

import { theme, ThemeContext } from "core/contexts";
import { useEventListener, useRoutes } from "core/hooks";
import { $main, setHeight } from "core/modules/main";
import { useStore } from "effector-react";
import { AppLayout } from "ui/app-layout/AppLayout";

export const App = () => {
  useRoutes();
  useEventListener("resize", () => setHeight(window.innerHeight));
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
