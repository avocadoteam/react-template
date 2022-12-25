import { ModalRoute, PanelRoute, PopoutRoute, ViewRoute } from "core/models";
import { createEvent } from "effector";

export const setActiveView = createEvent<ViewRoute>();
export const setActivePanel = createEvent<PanelRoute>();
export const setActiveModal = createEvent<ModalRoute | null>();
export const setActivePopout = createEvent<PopoutRoute | null>();
