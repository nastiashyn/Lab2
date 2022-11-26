import React from 'react';
import cn from 'classnames';

import './styles.scss'

const Button = ({ color, children, className, ...props }) => {
  return <button className={cn("button", className, { white: color === 'white', blue: color === 'blue' })} {...props}>{children}</button>
};

export default Button;
