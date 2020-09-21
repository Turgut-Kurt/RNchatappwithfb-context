import {LOADING_START, LOADING_STOP} from '../type';

export const loadingStart = () => ({
  type: LOADING_START,
});
export const loadingStop = () => ({
  type: LOADING_STOP,
});
