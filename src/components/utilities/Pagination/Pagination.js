import React from 'react';
import PageButton from './PageButton/PageButton';
import style from './Pagination.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = (props) => {
    const num_of_page = props.pageCount;
    const active_page = props.activePage;
    let buttons = [];

    if(active_page === num_of_page) {
        for(var i = active_page; i - 10; i++){
            buttons.push(i)
        }
    } else {
        for(var ii = active_page; ii < 10; ii++){
            buttons.push(ii)
        }
    }
    const displayButtons = buttons.map(btn => <PageButton key={btn}>{btn}</PageButton>);
    return (
        <div className={style.pagination}>
            <span className="prev"><FontAwesomeIcon icon={faChevronCircleLeft} /> Previous </span>
            <div className={style['page-button']}>
                {displayButtons}
            </div>
            <span className="next">Next <FontAwesomeIcon icon={faChevronCircleRight} /> </span>
        </div>
    )
}

export default Pagination;