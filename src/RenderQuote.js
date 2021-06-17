import React from 'react';

const RenderQuote = (props) => {

  return (
    <div className="quotes">
      <div className="content-quote">"{props.content[0]}"
      <div className="content-author">-{props.content[1]}</div>
      </div>
    </div>
  )
};

export default RenderQuote;
