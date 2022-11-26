import React from 'react';

import './styles.scss'

const Subtitle = ({ children, ...props }) => {

  return <p className="subtitle" {...props}>{children}</p>
};

export default Subtitle;
