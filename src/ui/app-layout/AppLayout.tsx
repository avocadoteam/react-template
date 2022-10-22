import { AppRoot, Root, SplitCol, SplitLayout, View } from "@vkontakte/vkui";
import { PanelRoute, ViewRoute } from "core/models";
import { $main } from "core/modules/main";
import { useStore } from "effector-react";
import { memo } from "react";
import { Home } from "ui/panels/Home";

export const AppLayout = memo(() => {
  const { activePanel, activeView } = useStore($main);

  return (
    <AppRoot>
      <Root activeView={activeView}>
        <SplitLayout>
          <SplitCol>
            <View id={ViewRoute.Main} activePanel={activePanel}>
              <Home id={PanelRoute.Home} />
            </View>
          </SplitCol>
        </SplitLayout>
      </Root>
    </AppRoot>
  );
});
