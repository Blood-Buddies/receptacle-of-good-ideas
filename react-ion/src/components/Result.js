import React from 'react';

// This may be where we include links to products, probably via an AJAX get request.
function Result(props) {
return (
    <div className="result">
    You prefer <strong>{props.quizResult}</strong>!
    </div>
);
}

Result.propTypes = {
quizResult: React.PropTypes.string.isRequired,
};

export default Result;