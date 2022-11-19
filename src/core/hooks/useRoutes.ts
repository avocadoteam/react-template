import { PanelRoute, ViewRoute } from "core/models";
import { $main, setActivePanel } from "core/modules/main";
import { useStore } from "effector-react";
import { useCallback, useEffect } from "react";
import { useEventListener } from "./useEventListener";

export const useRoutes = () => {
  const { activeView, activePanel } = useStore($main);
  useEffect(() => {
    window.location.assign(`#${activeView}/${activePanel}`);
  }, [activeView, activePanel]);
  const handleHashChange = useCallback(() => {
    const [view, panel] = window.location.hash.slice(1).split("/");
    if (view && panel && navigator.onLine) {
      setActiveView(view as unknown as ViewRoute);
      setActivePanel(panel as unknown as PanelRoute);
    }
  }, [activeView]);
  useEventListener("hashchange", handleHashChange);

  const handleOnline = useCallback(() => {
    toHome();
  }, []);
  useEventListener("online", handleOnline);
};
