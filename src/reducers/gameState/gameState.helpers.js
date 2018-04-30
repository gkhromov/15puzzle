import {shuffle, times} from 'lodash';

export function getInitialState(rowSize) {
    const state = {
        rowSize: rowSize,
        steps: [],
        movableValues: [],
    };

    // Generate random sequence
    const values = shuffle(times(rowSize * rowSize, parseInt));

    // Fill step
    const step = [];
    let line;
    for (let i = 0; i < rowSize; i++) {
        line = [];
        for (let j = 0; j < rowSize; j++) {
            line.push(values.pop());
        }
        step.push(line);
    }
    state.steps.push(step);

    state.movableValues = getMovableValues(step);

    return state;
}

export function getMovableValues(values) {
    const size = values.length - 1;
    const movableValues = [];

    var j;
    for (var i = 0; i <= size; i++) {
        j = values[i].indexOf(0);
        if (j !== -1) break;
    }

    if (i !== 0) movableValues.push(values[i - 1][j]);
    if (i !== size) movableValues.push(values[i + 1][j]);
    if (j !== 0) movableValues.push(values[i][j - 1]);
    if (j !== size) movableValues.push(values[i][j + 1]);
    return movableValues;
}
