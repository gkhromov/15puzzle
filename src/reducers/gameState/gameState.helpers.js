import {shuffle, times} from 'lodash';

export function getInitialState(elements) {
    const state = {
        elements: elements,
        step: 0,
        steps: [],
    };

    // Generate random sequence
    const values = shuffle(times(elements, parseInt));

    // Fill step
    const step = [];
    let line;
    for (let i = 0; i < elements; i++) {
        line = [];
        for (let j = 0; j < elements; j++) {
            line.push(values.pop());
        }
        step.push(line);
    }
    state.steps.push(step);

    return state;
}
