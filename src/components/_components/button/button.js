import React, {Component} from 'react';
import styles from './button.css';
import PropTypes from 'prop-types';

class ButtonComponent extends Component {
    render() {
        return (
            <div className={styles.root} onClick={this.props.onClick}>
                {this.props.text}
            </div>
        );
    }
}

ButtonComponent.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ButtonComponent;