import React from 'react';
import style from './PageButton.module.css';
import { useHistory, useLocation } from 'react-router';
const PageButton = (props) => {
    const loc = useLocation();
    const params = new URLSearchParams(loc.search);
    const activeSearch = params.get('query');
    const history = useHistory();
    let buttonClass = style.page;

    if(props.children === props.active){
        buttonClass = `${style.active} ${style.page}`;
    }
    const gotoPage = () => {
        if(props.children !== props.active){
            if(activeSearch){
                history.push(`/search?query=${activeSearch}&page=${props.children}`)
            } else {
                history.push(`${history.location.pathname}?page=${props.children}`)
            }
        }
    }
    //console.log('Active Search ', activeSearch)
    return <button className={buttonClass} onClick={gotoPage}>{props.children}</button>;
}

export default PageButton;