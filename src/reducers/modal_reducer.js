import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';

const INITIAL_STATE = { open: false };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return { ...state, open: true };
        case CLOSE_MODAL:
            return { ...state, open: false };
        default:
            return state;
    }
}
