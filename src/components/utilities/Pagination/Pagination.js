import React from 'react';
import PageButton from './PageButton/PageButton';
import style from './Pagination.module.css';
import { useLocation, useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = (props) => {
    const num_of_page = props.pageCount;
    const active_page = props.activePage;
    let buttons = [];

    const history = useHistory();
    const loc = useLocation();
    const params = new URLSearchParams(loc.search);
    const activeSearch = params.get('query');

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
    } else {
        for(var i = 1; i <= num_of_page; i++){
            buttons.push(i)
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

    const prevPageHandler = () => {
        if(activeSearch){
            history.push(`/search?query=${activeSearch}&page=${active_page - 1}`)
        } else {
            history.push(`${history.location.pathname}?page=${active_page - 1}`)
        }
    }
    const nextPageHandler = () => {
        if(activeSearch){
            history.push(`/search?query=${activeSearch}&page=${active_page + 1}`)
        } else {
            history.push(`${history.location.pathname}?page=${active_page + 1}`)
        }
    }
    const prevButton = <span className="prev" onClick={prevPageHandler}><FontAwesomeIcon icon={faChevronCircleLeft} /> Previous </span>;
    const nextButton = <span className="next" onClick={nextPageHandler}>Next <FontAwesomeIcon icon={faChevronCircleRight} /> </span>;
    
    return (
        <div className={style.pagination}>
            {active_page > 1 && prevButton}
            <div className={style['page-button']}>
                {firstPageButton}
                {displayButtons}
                {lastPageButton}
            </div>
            {num_of_page > 1 && nextButton}
        </div>
    )
}

export default Pagination;