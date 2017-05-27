import React, {PropTypes} from "react";

const Label = ({value}) => {

    return (
        <div style={{color: 'white'}}><h3>{value}</h3></div>
    )
};

Label.propTypes = {
    value: PropTypes.string.isRequired
};

export default Label;