import React from 'react';

const Timestamp = () => {
let time = Date.now();

const timeStamp = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(time);
};

export default Timestamp;
