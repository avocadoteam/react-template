import { Appearance, ModalRoute, PanelRoute, ViewRoute } from "core/models";
import { createStore } from "effector";
import {
  checkTrainingEvent,
  setActiveModal,
  setActivePanel,
  setActiveView,
  setAppeareance,
  setFetching,
  setHeight,
} from "./events";

type Store = {
  appeareance: Appearance;
  isFetching: boolean;
  activeView: ViewRoute;
  activePanel: PanelRoute;
  activeModal: ModalRoute | null;
  isCheckTraining: boolean;
  height: number;
};

export const $main = createStore<Store>({
  appeareance: "light",
  isFetching: false,
  activeView: ViewRoute.Main,
  activePanel: PanelRoute.Home,
  activeModal: null,
  isCheckTraining: false,
  height: window.innerHeight,
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
  }))
  .on(checkTrainingEvent, (state) => ({
    ...state,
    isCheckTraining: true,
  }))
  .on(setHeight, (state, height) => ({
    ...state,
    height,
  }));
