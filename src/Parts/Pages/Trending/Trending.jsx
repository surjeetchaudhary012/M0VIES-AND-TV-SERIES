import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Node from "../../Node/Node";
import './Trending.css';
import Paging from "../../Paging/Paging";

const Trending = () => {
    
    const [page,setPage] = useState(1);
    const [trendingContent,setTrendingContent] = useState([]);
   

    const fetchTrending = async () => {
        const  { data }  = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_CENTRE_API}&page=${page}`);
        setTrendingContent(data.results);
    };

      
    useEffect(() => {
        fetchTrending();
        // eslint-disable-next-line
    },[page]);
    

    return (
        <>
         <div>
            <span className = "mainPages" > Trending </span>
            <div className="trending">
            {trendingContent && trendingContent.map((c) => {
             return  <Node key = {c.id}
             id = {c.id} 
             poster = {c.poster_path}
             title = {c.name || c.title}
             date = {c.firstair_date || c.release_date }
             media_type = {c.media_type}
             vote_average = {c.vote_average}   
              />;
            })}
        </div>
        <Paging setPage = {setPage} />
        </div>
       
        </>
    )
}

export default Trending