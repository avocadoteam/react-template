import { AppRoot, Root, SplitCol, SplitLayout } from "@vkontakte/vkui";
import { $main } from "core/modules/main";
import { useStore } from "effector-react";
import { memo } from "react";

export const AppLayout = memo(() => {
  const { activeView } = useStore($main);

  return (
    <AppRoot>
      <Root activeView={activeView}>
        <SplitLayout>
          <SplitCol></SplitCol>
        </SplitLayout>
      </Root>
    </AppRoot>
  );
});
