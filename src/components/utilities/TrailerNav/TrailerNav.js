import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faHome } from '@fortawesome/free-solid-svg-icons';

const TrailerNav = () => {
    const history = useHistory();

    const goToPrevPage = () => {
        history.goBack()
    }
    const previousPage = <FontAwesomeIcon icon={faAngleDoubleLeft} onClick={goToPrevPage} />;
    const homeIcon = <FontAwesomeIcon icon={faHome} />;
    const homePage = <Link to={`/`}> {homeIcon} </Link>
    return <>
        {previousPage}
        {homePage}
    </>;
}
 
export default TrailerNav;