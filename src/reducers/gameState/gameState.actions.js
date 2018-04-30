const prefix = 'GAME_STATE_'

export const GAME_STATE_INIT = prefix + 'INIT';
export function gameStateInit() {
    return {type: GAME_STATE_INIT};
}
export const GAME_STATE_GO_BACK = prefix + 'GO_BACK';
export function gameStateGoBack() {
    return {type: GAME_STATE_GO_BACK};
}

export const GAME_STATE_MOVE_VALUE = prefix + 'MOVE_VALUE';
export function gameStateMoveValue(value) {
    return {type: GAME_STATE_MOVE_VALUE, payload: value};
}