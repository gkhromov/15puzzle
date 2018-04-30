import React, {Component} from 'react';
import styles from './knuckle.css';
import PropTypes from 'prop-types';

class KnuckleComponent extends Component {
    render() {
        const value = this.props.value ? String(this.props.value) : '';
        return (
            <div className={styles.root} onClick={this.onClick}>
                {value}
            </div>
        );
    }

    onClick = () => {
        const {value, movable, onClick} = this.props;
        if (movable) {
            onClick(value);
        }
    }
}

KnuckleComponent.propTypes = {
    value: PropTypes.number.isRequired,
    movable: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default KnuckleComponent;