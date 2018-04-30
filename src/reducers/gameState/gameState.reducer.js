import {getInitialState, getMovableValues} from "./gameState.helpers";
import {
    GAME_STATE_GO_BACK,
    GAME_STATE_INIT,
    GAME_STATE_MOVE_VALUE
} from "./gameState.actions";
import {ROW_SIZE} from "./gameState.constants";

const initialState = getInitialState(ROW_SIZE);
export const gameStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case GAME_STATE_INIT:
            return {
                ...getInitialState(ROW_SIZE),
            };
        case GAME_STATE_GO_BACK:
            if (state.steps.length > 1) {
                const steps = [...state.steps];
                steps.pop();
                return {
                    ...state,
                    movableValues: getMovableValues(steps[steps.length - 1]),
                    steps,
                };
            }
            return state;
        case GAME_STATE_MOVE_VALUE:
            const newStep = state.steps[state.steps.length - 1].map(line => line.map(
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
            const steps = [...state.steps];
            steps.push(newStep);

            return {
                ...state,
                steps,
                movableValues: getMovableValues(newStep),
            };
        default:
            return state;
    }
};