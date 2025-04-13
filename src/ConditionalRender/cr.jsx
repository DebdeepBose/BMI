import React from "react";
import PropTypes from "prop-types";  

function CR(props) {
    if (props.isLoggedIn) {
        return <h1>Welcome {props.userName}</h1>;
    }
    return <h1>Please Log In</h1>;
}

CR.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,  
    userName: PropTypes.string.isRequired,  
};

CR.defaultProps = {
    isLoggedIn: false,
    userName: "Guest",
};

export default CR;
