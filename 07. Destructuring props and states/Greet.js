import React from 'react';

// ! destructuring props in body
// const Greet = (props) => {
//   const { name, heroName, children } = props;

// ! destructuring props in parameter
const Greet = ({ children, name, heroName }) => {
  return (
    <div className="container bg-warning mb-2">
      <h3>
        {name} a.k.a. {heroName}
      </h3>
      {children}
    </div>
  );
};

export default Greet;
