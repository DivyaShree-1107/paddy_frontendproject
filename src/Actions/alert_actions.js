import { alert_constants } from '../constants/alert_constants';

export const alert_actions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: alert_constants.SUCCESS, message };
}

function error(message) {
    return { type: alert_constants.ERROR, message };
}

function clear() {
    return { type: alert_constants.CLEAR };
}