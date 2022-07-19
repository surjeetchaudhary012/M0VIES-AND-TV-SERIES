import React from "react";
import axios from "axios";
import  { useEffect, useState } from "react";
import Node from "../../Node/Node";
import Paging from "../../Paging/Paging";
import Genres from "../../Genres/genres";
import useGenres from "../../../Hooks/useGenres";

const Series = () => {

    const [page,setPage] = useState(1);
    const [films,setFilms] = useState([]);
    const [allPages,setAllPages] = useState();
    const [genres,setGenres] = useState([]);
    const [selectedGenres,setSelectedGenres] = useState([]);
    const genreforFilms = useGenres(selectedGenres);

    const fetchFilms = async () => {
        const { data } = await axios.get(`
        https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_CENTRE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforFilms}`);     
          
        setFilms(data.results);
        setAllPages(data.total_pages);

    };

      

    useEffect( () => {
        fetchFilms();
         // eslint-disable-next-line
    },[page,genreforFilms]);
     
    





    return (
        <>
         <div>
            <span className = "mainPages" >TV Series </span>
            <Genres
                type = "tv"  selectedGenres = {selectedGenres} 
                genres = {genres} setGenres = {setGenres}
                setSelectedGenres = {setSelectedGenres} setPage = {setPage}
            />
            <div className="trending">
            {films && films.map((c) => {
             return  <Node key = {c.id}
             id = {c.id} 
             poster = {c.poster_path}
             title = {c.name || c.title}
             date = {c.firstair_date || c.release_date }
             media_type = "tv"
             vote_average = {c.vote_average}   
              />;
            })}
        </div>
        {allPages > 1 && ( <Paging setPage = {setPage} noOfPages = {allPages} />)}
        </div>
        </>
    )
}

export default Series;