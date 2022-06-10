import React from 'react';

const FunctionClick = () => {
  const clickHandler = () => {
    console.log('F button click');
  };
  return (
    <div>
      <button className="btn btn-danger" onClick={clickHandler}>
        Function Click
      </button>
    </div>
  );
};

export default FunctionClick;
