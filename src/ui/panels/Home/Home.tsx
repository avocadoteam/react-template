import { Panel } from "@vkontakte/vkui";
import { PanelRoute } from "core/models";
import { memo } from "react";

type Props = {
  id: PanelRoute;
};

export const Home = memo<Props>(({ id }) => <Panel id={id}></Panel>);
