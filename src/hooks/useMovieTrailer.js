import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";


const useMovieTrailer = ({movieId}) => {
    
    const dispatch = useDispatch();

    const getMovieVideos = async () =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();
        //console.log(json.results);

        const trailer = json.results[0].key;

        dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
        getMovieVideos();
    }, [movieId]);
}
export default useMovieTrailer;
