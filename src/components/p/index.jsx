import React from 'react';

import './styles.scss'

const P = ({ children, ...props }) => {

  return <p className="description" {...props}>{children}</p>
};

export default P;
