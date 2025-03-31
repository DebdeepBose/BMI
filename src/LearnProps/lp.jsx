import React from "react";
import PropTypes from 'prop-types';  

function Lp(props) {
  return (
    <div className="student">
      <p>Name: {props.name}, Age: {props.age}, Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Lp.propTypes = { 
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired,
};

export default Lp;
