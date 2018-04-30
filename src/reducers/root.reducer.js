import {combineReducers} from 'redux'
import {gameStateReducer} from './gameState/gameState.reducer'

export const rootReducer = combineReducers({
    gameState: gameStateReducer,
})