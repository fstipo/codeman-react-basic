import React from 'react';

const Greet = (props) => {
  console.log(props);
  return (
    <div className="container bg-warning mb-2">
      <h3>
        {props.name} a.k.a. {props.heroName}
      </h3>
      {props.children}
    </div>
  );
};

export default Greet;
