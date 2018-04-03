import { TOAST_DOWN, TOAST_UP } from '../types';

export function toastUp(notification) {
  return {
    type: TOAST_UP,
    payload: notification
  };
}

export function toastDown() {
  return dispach => {
    dispach({
      type: TOAST_DOWN
    });
  };
}
