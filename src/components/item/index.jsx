import React from 'react';
import cn from 'classnames'

import './styles.scss'

const Item = ({ icon, color, className, ...props }) => {

  return <div className={cn('item', className, { orange: color === 'orange', yellow: color === 'yellow', green: color === 'green' })} {...props}>{icon}</div>
};

export default Item;
