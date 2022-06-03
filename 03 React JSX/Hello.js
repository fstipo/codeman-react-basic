import React from 'react';

// With JSX
const Hello = () => {
  //   return <div className="div-class">Hello 👀</div>;
  // Without JSX
  return React.createElement(
    'div',
    { className: 'div-class', id: 'my-Id' },
    React.createElement('h1', null, 'Hello 👀👀👀')
  );
};

export default Hello;
