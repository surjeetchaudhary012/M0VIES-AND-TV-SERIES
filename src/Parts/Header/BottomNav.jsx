import React, { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import MovieIcon from '@material-ui/icons/Movie';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 100,
    backgroundColor: "rgb(200,200,200"
  }, 
  label : {
    fontSize: "8rem",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const history = useHistory();

  useEffect(() => {
   
    if(value === 0) history.push("/");
    else if (value === 1) history.push("/films");
    else if (value === 2) history.push("/series");
    else if (value === 3) history.push("/search");
  },[value,history]);


  return (
    <BottomNavigation 
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction style = {{color: "black"}} label="Trending" icon={<TrendingUpOutlinedIcon/>} />
      <BottomNavigationAction style = {{color: "black"}} label="Movies" icon={<MovieIcon />} />
      <BottomNavigationAction style = {{color: "black" }} label="TV Series" icon={<LiveTvIcon />} />
      <BottomNavigationAction style = {{color: "black" }} label="Search" icon={<SearchOutlinedIcon />} />
    </BottomNavigation>
  );
}

