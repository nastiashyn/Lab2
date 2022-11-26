import React from 'react';
import cn from 'classnames';

import './styles.scss'

const Title = ({ color, size, children, className, ...props }) => {
  switch (size) {
    case 'medium':
      return <h3 {...props} className={cn('title', className, { medium: size === 'medium' })}>{children}</h3>
    default:
      return <h1  {...props} className={cn('title', className, { white: color === 'white' })}>{children}</h1>
  }
};

export default Title;
