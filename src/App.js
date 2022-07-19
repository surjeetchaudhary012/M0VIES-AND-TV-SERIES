import React from 'react';
import './App.css';
import Header from './Parts/Header/Header'
import SimpleBottomNavigation from './Parts/Header/BottomNav'
import { Container } from '@material-ui/core';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Trending from './Parts/Pages/Trending/Trending';
import Films from './Parts/Pages/Films/Films';
import Search from './Parts/Pages/Search/Search';
import Series from './Parts/Pages/Series/Series';


 const  App = () => {
  return (
     <BrowserRouter>
         <Header/> 
         <div className="center"> 
         <Container>
          <Switch>
            <Route  exact path ='/' component = {Trending}  />
            <Route  exact path ='/films' component = {Films} />
            <Route  exact path ='/series' component = {Series} />
            <Route exact path ='/search' component = {Search} />
          </Switch>
         </Container>
         </div>
         <SimpleBottomNavigation/> 
    </BrowserRouter>
    );
}

export default App;
