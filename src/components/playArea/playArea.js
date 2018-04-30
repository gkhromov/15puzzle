import React, {Component} from 'react';
import styles from './playArea.css';
import {connect} from "react-redux";
import {gameStateGoBack, gameStateInit, gameStateMoveValue} from "../../reducers/gameState/gameState.actions";
import Knuckle from "./_components/knuckle/knuckle";
import Button from "../_components/button/button";

class PlayAreaComponent extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.buttons}>
                    <Button text="Back" onClick={this.props.gameStateGoBack}/>
                    <div>Steps: {this.props.stepCount}</div>
                    <Button text="Reset" onClick={this.props.gameStateInit}/>
                </div>
                {this.renderLines()}
            </div>
        );
    }

    renderLines() {
        return this.props.step.map((values, i) => {
            return (
                <div key={`LINE_${i}`} className={styles.line}>
                    {this.renderLine(values)}
                </div>
            )
        });
    }

    renderLine(values) {
        return values.map(value => {
            return (
                <Knuckle
                    key={`KNUCKLE_${value}`}
                    value={value}
                    movable={this.props.movableValues.indexOf(value) !== -1}
                    onClick={this.onKnuckleClick}
                />
            );
        });
    }

    onKnuckleClick = (value) => {
        this.props.gameStateMoveValue(value);
    }
}

const mapStateToProps = (state) => ({
    step: state.gameState.steps[state.gameState.steps.length - 1],
    stepCount: state.gameState.steps.length - 1,
    rowSize: state.gameState.rowSize,
    movableValues: state.gameState.movableValues,
});

const mapDispatchToProps = (dispatch) => ({
    gameStateInit: () => dispatch(gameStateInit()),
    gameStateGoBack: () => dispatch(gameStateGoBack()),
    gameStateMoveValue: (value) => dispatch(gameStateMoveValue(value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayAreaComponent);