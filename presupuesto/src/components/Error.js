import React from 'react';
import PropTypes from 'prop-types';

const Error = ({mensaje}) =>(

    <p className = "error alert-danger alert" >{mensaje}</p>
);

Error.prototypes = {

    mensaje: PropTypes.string.isRequired
}

export default Error;