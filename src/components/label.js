import React from "react";
import PropTypes from 'prop-types';

const Label = (props) => {

    return (
        <div style={{
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'space-between'
        }}>
            <h3>{props.value}</h3>
            { props.children }
        </div>
    )
};

Label.propTypes = {
    value: PropTypes.string.isRequired
};

export default Label;