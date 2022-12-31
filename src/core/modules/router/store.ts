import { ModalRoute, PanelRoute, PopoutRoute, ViewRoute } from '@core/models';
import { createStore } from 'effector';
import { _setActiveModal, _setActivePopout, setActiveModal, setActivePanel, setActivePopout, setActiveView } from './event';

type Store = {
  activeView: ViewRoute;
  activePanel: PanelRoute;
  activeModal: ModalRoute | null;
  activePopout: PopoutRoute | null;
};

export const $router = createStore<Store>({
  activeView: ViewRoute.Main,
  activePanel: PanelRoute.Home,
  activeModal: null,
  activePopout: null,
})
  .on(setActiveView, (state, activeView) => ({
    ...state,
    activeView,
  }))
  .on(setActivePanel, (state, activePanel) => ({
    ...state,
    activePanel,
  }))
  .on(setActiveModal, (state, activeModal) => ({
    ...state,
    activeModal,
  }))
  .on(_setActiveModal, (state, activeModal) => ({
    ...state,
    activeModal,
  }))
  .on(setActivePopout, (state, activePopout) => ({
    ...state,
    activePopout,
  }))
  .on(_setActivePopout, (state, activePopout) => ({
    ...state,
    activePopout,
  }));
