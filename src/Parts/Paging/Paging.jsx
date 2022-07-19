import React from "react";
import Pagination from '@material-ui/lab/Pagination';
import './Paging.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

const pagingTheme = createTheme({
    palette : {
        type : "dark",
    }
})

const Paging = ({setPage,noOfPages = 20}) => {

    const  handlePageChange = (page) => {
    setPage(page);
    window.scroll(0,0);
}
    return (
        <ThemeProvider theme = {pagingTheme}>
           <div className="paging">
           <Pagination  onChange = {(event) => handlePageChange(event.target.textContent)}
            count= {noOfPages} variant="outlined" color="primary" />
           </div>
        </ThemeProvider>
    )
}

export default Paging;