import {getInitialState} from "./gameState.helpers";
import {
    GAME_STATE_GO_BACK,
    GAME_STATE_GO_FORWARD,
    GAME_STATE_INIT,
    GAME_STATE_INIT_WITH_STEP, GAME_STATE_SET_STEP
} from "./gameState.actions";

export const gameStateReducer = (state = [], action) => {
    switch (action.type) {
        case GAME_STATE_INIT:
            return {
                ...getInitialState(),
            };
        case GAME_STATE_INIT_WITH_STEP:
            return {
                ...getInitialState(),
                steps: [...action.payload],
            };
        case GAME_STATE_GO_BACK:
            return {
                ...state,
                step: state.step > 0 ? state.step - 1 : 0,
            };
        case GAME_STATE_GO_FORWARD:
            return {
                ...state,
                step: state.step < state.steps.length ? state.step + 1 : state.step,
            };
        case GAME_STATE_SET_STEP:
            const newStep = state.map(line => line.map(
                value => {
                    if (value === action.payload) {
                        return 0;
                    } else if (value === 0) {
                        return action.payload;
                    } else {
                        return value;
                    }
                }
            ));
            return {
                ...state,
                step: state.step + 1,
                steps: [...state.steps, ...newStep],
            };
        default:
            return state;
    }
};