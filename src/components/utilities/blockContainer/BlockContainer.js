import React from 'react';
import './BlockContainer.css';

const BlockContainer = React.forwardRef((props, ref) => {
    return <div ref={ref} className={props.className ? props.className + ' container' : 'container'}>{props.children}</div>
})

export default BlockContainer;