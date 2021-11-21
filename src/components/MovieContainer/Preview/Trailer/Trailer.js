import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import style from './Trailer.module.css';
import { Carousel } from '@trendyol-js/react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import TrailerModal from '../../../utilities/TrailerModal/TrailerModal';

const Trailer = (props) => {
    const params = useParams();
    const [trailers, setTrailers] = useState([]);
    const [trailerVideo, setTrailerVideo] = useState('');
    useEffect(() => {
        const getTrailers = async() => {
            try {
                const videos = await axios(`https://api.themoviedb.org/3/movie/${params.movieId}/videos?api_key=f785d2cd4e430f2258527567b3468db6`);
                setTrailers(videos.data);
            } catch(err) {
                console.log(err)
            }
        }
        getTrailers();
    }, [params]);

    
    const trailersArr = trailers.results ? trailers.results : [];
    const prevButton = <FontAwesomeIcon icon={faChevronLeft} className={style['trailer-arrow']} />;
    const nextButton = <FontAwesomeIcon icon={faChevronRight} className={style['trailer-arrow']} />;

    const setTrailerVid = (videoId) => {
        setTrailerVideo(videoId);
    }
    const clearTrailerVideo = () => {
        setTrailerVideo('');
    }
    const thumbnailCarousel = trailersArr.map((trailer) => 
        <div className={style['trailer']} key={trailer.key}>
            <img src={`https://img.youtube.com/vi/${trailer.key}/default.jpg`} alt={trailer.name} onClick={() => setTrailerVid(trailer.key)} />
            <p>{trailer.name}</p>
        </div>);
    const trailersCarousel = <div className={style['trailer-section']}>
                                <div className={style['carousel-container']}>
                                    <h2>Videos</h2>
                                    <Carousel 
                                        show={8} 
                                        infinite={false}
                                        rightArrow={nextButton}
                                        leftArrow={prevButton}>
                                        {thumbnailCarousel}
                                    </Carousel>
                                </div>
                            </div>;
    const videoURL = `https://www.youtube.com/embed/${trailerVideo}`;

    return (<>
        {trailersArr.length ? trailersCarousel : <p>No Videos Available</p>}
        {trailerVideo ? <TrailerModal closeTrailer={clearTrailerVideo}>
            <div className={style['video-container']}>
                <iframe 
                    width="100%" height="100%" 
                    src={videoURL}
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        </TrailerModal> : null}
        
    </>);
}
 
export default Trailer;