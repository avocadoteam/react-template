import { Appearance, ModalRoute, PanelRoute, ViewRoute } from "core/models";
import { createEvent } from "effector";

export const setAppeareance = createEvent<Appearance>();
export const setFetching = createEvent<boolean>();
export const setActiveView = createEvent<ViewRoute>();
export const setActivePanel = createEvent<PanelRoute>();
export const setActiveModal = createEvent<ModalRoute | null>();
export const checkTrainingEvent = createEvent();
export const setHeight = createEvent<number>();
export const toHome = createEvent();
