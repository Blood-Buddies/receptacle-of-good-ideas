import React from 'react';
let ReactPropTypes = require('react').PropTypes;

  function Question(props) {
    return (
      <h2 className="question">{props.content}</h2>
    );
  }

  Question.propTypes = {
    //Browser keeps saying "string" is undefined
    content: ReactPropTypes.string.isRequired
  };

  export default Question;
