import React from 'react';
import style from './PageButton.module.css';
import { useHistory } from 'react-router';
const PageButton = (props) => {
    //const loc = useLocation();
    const history = useHistory();
    let buttonClass = style.page;

    if(props.children === props.active){
        buttonClass = `${style.active} ${style.page}`;
    }
    const gotoPage = () => {
        if(props.children !== props.active){
            history.push(`${history.location.pathname}?page=${props.children}`)
        }
    }
    return <button className={buttonClass} onClick={gotoPage}>{props.children}</button>;
}

export default PageButton;