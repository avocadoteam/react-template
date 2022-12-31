import { ModalRoute, PanelRoute, PopoutRoute, ViewRoute } from '@core/models';
import { createEvent } from 'effector';

export const setActiveView = createEvent<ViewRoute>();
export const setActivePanel = createEvent<PanelRoute>();
export const setActiveModal = createEvent<ModalRoute>();
export const setActivePopout = createEvent<PopoutRoute>();
export const _setActiveModal = createEvent<ModalRoute | null>();
export const _setActivePopout = createEvent<PopoutRoute | null>();
