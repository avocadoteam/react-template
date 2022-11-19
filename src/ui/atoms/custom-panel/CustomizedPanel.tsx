import { Panel } from "@vkontakte/vkui";
import { ThemeContext } from "core/contexts";
import { PanelRoute } from "core/models";
import { $main } from "core/modules/main";
import { useStore } from "effector-react";
import { memo, useContext } from "react";

type Props = {
  id: PanelRoute;
  className?: string;
  style?: object;
  children?: React.ReactNode;
};

export const CustomizedPanel = memo<Props>(
  ({ id, className, style, children }) => {
    const theme = useContext(ThemeContext);
    const { height } = useStore($main);

    return (
      <Panel id={id}>
        <div
          className={className}
          style={{
            background: theme.appBg,
            minHeight: height,
            ...style,
          }}
        >
          {children}
        </div>
      </Panel>
    );
  }
);
