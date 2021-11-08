import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import style from './Trailer.module.css';
const Trailer = (props) => {
    const params = useParams();
    const [trailers, setTrailers] = useState([]);
    useEffect(() => {
        const getTrailers = async() => {
            try {
                const videos = await axios(`https://api.themoviedb.org/3/movie/${params.movieId}/videos?api_key=f785d2cd4e430f2258527567b3468db6`)
                setTrailers(videos.data)
            } catch(err) {
                console.log(err)
            }
        }
        getTrailers();
    }, [params]);
    console.log(trailers.results)
    const trailersArr = trailers.results ? trailers.results : [];
    const thumbnailCarousel = trailersArr.map((trailer) => 
        <div className={style['trailer']} key={trailer.key}>
            <img src={`https://img.youtube.com/vi/${trailer.key}/default.jpg`} alt={trailer.name} />
            <p>{trailer.name}</p>
        </div>);
    const trailersCarousel = <div className={style['trailer-section']}><h2>Videos</h2><div className={style['trailer-carousel']}>{thumbnailCarousel}</div></div>;
    return (trailersArr.length ? trailersCarousel: <p>No Videos Available</p>);
}
 
export default Trailer;