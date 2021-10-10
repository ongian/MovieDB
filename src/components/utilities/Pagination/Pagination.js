import React from 'react';
import PageButton from './PageButton/PageButton';
import style from './Pagination.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = (props) => {
    const num_of_page = props.pageCount;
    const active_page = props.activePage;
    let buttons = [];


    console.log('Page Count ', props.pageCount)
    if(num_of_page >= 10){
        if(active_page <= (num_of_page - 9)){
            if(active_page >= 5){
                for(var a = (active_page - 4); a <= (active_page + 5); a++){
                    buttons.push(a)
                }
            } else {
                for(var a1 = 1; a1 <= 10; a1++){
                    buttons.push(a1)
                }
            }
            
            console.log('a')
        }
        if(active_page === num_of_page){
            for(var b = active_page; b >= num_of_page - 9; b--){
                buttons.unshift(b)
            }
            console.log('b')
        }
        if(active_page > (num_of_page - 9) && active_page < num_of_page){
            for(var c = (num_of_page - 9); c <= num_of_page; c++){
                buttons.push(c)
            }
            console.log('c')
        }
    }
    const displayButtons = buttons.map(btn => <PageButton getCurrentPage={props.getCurrentPage} active={active_page} key={btn}>{btn}</PageButton>);
    let firstPageButton;
    let lastPageButton;

    if(active_page <= (num_of_page - 10) && num_of_page > 9){
        lastPageButton = <React.Fragment> ... <PageButton getCurrentPage={props.getCurrentPage} key={num_of_page}>{num_of_page}</PageButton></React.Fragment>
    }
    if(active_page > 10 && num_of_page > 11){
        firstPageButton = <React.Fragment><PageButton getCurrentPage={props.getCurrentPage} key={1}>1</PageButton> ... </React.Fragment>
    }
    console.log(num_of_page)
    return (
        <div className={style.pagination}>
            <span className="prev"><FontAwesomeIcon icon={faChevronCircleLeft} /> Previous </span>
            <div className={style['page-button']}>
                {firstPageButton}
                {displayButtons}
                {lastPageButton}
            </div>
            <span className="next">Next <FontAwesomeIcon icon={faChevronCircleRight} /> </span>
        </div>
    )
}

export default Pagination;