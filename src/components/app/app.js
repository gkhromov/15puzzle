import React, {Component} from 'react';
import styles from './app.css';
import PlayArea from "../playArea/playArea";

class AppComponent extends Component {
    render() {
        return (
            <div className={styles.root}>
                <PlayArea/>
            </div>
        );
    }
}

export default AppComponent;