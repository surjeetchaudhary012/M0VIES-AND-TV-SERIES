import React, { useEffect, useState } from "react";
import TextField from '@material-ui/core/TextField';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import axios from "axios";
import Node from "../../Node/Node";
import Paging from "../../Paging/Paging";


const Search = () => { 

const [type,setType] = useState(0);
const [searchText,setSearchText] = useState("");
const [page,setPage] = useState(1);
const [content,setContent] = useState([]);
const [numOfPages,setNumOfPages] = useState();



        const searchTheme = createTheme({
            palette : {
                type : "dark",
                primary: {
                    main : "#fff",
                },
            },
        })

   
        const fetchSearch = async () => {
      
              const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_CENTRE_API}&language=en-US&query=${searchText}&page=${page}&include_adult=false`);
              setContent(data.results);
              setNumOfPages(data.total_pages);
            
          };
        
          useEffect(() => {
            window.scroll(0,0);
            fetchSearch();
            setSearchText("");
            // eslint-disable-next-line
          }, [type, page]);
            
         

    return (
        <>
         <div>
            <span className = "mainPages" > Search </span>
            <ThemeProvider theme = {searchTheme}>
            <div style = {{display : "flex",
                           margin : "15px 0"}}>
            <TextField 
            id="filled-basic" 
            label="Search"
            autoSave="off"
            autoComplete="off"
            variant="outlined"
            style = {{flex : 1}}
            className = "searchField"
            value= {searchText}
            onChange={(event) => setSearchText(event.target.value)}
             />
             <Button  onClick = {fetchSearch} variant = "contained" style = {{marginLeft : 15 }}>

                <SearchIcon fontSize="large"/>
             </Button>
            </div>
           
           <Tabs value={type} 
                 indicatorColor = "primary" 
                 textColor="primary" 
                 style={{ paddingBottom: 5 }}
                 aria-label="disabled tabs example"
                 onChange={(event ,newValue) => {
                    setType(newValue);
                    setPage(1);
            }}>
             
             <Tab style = {{width : "50%"}}  label = "Movies" />
             <Tab style = {{width : "50%"}}  label = "TV Series"/>

            </Tabs>

            </ThemeProvider>

            <div className="trending">
            {content && content.map((c) => (
               <Node key = {c.id}
             id = {c.id} 
             poster = {c.poster_path}
             title = {c.name || c.title}
             date = {c.firstair_date || c.release_date }
             media_type = {type ? "tv" : "movie"}
             vote_average = {c.vote_average}   
              />
            ))}

            {searchText && !content && 
            (type ? <h2> NO TV SERIES FOUND </h2> : <h2>NO MOVIES FOUND </h2>) }

        </div>
        {numOfPages > 1 && ( <Paging setPage = {setPage} noOfPages = {numOfPages} />)}     

       </div>
        </>
    )
}

export default Search;
