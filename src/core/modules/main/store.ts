import { Appearance, ModalRoute, PanelRoute, ViewRoute } from "core/models";
import { createStore } from "effector";
import {
  setActiveModal,
  setActivePanel,
  setActiveView,
  setAppeareance,
  setFetching,
} from "./events";

type Store = {
  appeareance: Appearance;
  isFetching: boolean;
  activeView: ViewRoute;
  activePanel: PanelRoute;
  activeModal: ModalRoute | null;
};

export const $main = createStore<Store>({
  appeareance: "light",
  isFetching: false,
  activeView: ViewRoute.Main,
  activePanel: PanelRoute.Home,
  activeModal: null,
})
  .on(setAppeareance, (state, appeareance) => ({
    ...state,
    appeareance,
  }))
  .on(setFetching, (state, isFetching) => ({
    ...state,
    isFetching,
  }))
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
  }));
