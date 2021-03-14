import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';
import OutdoorGrillIcon from '@material-ui/icons/OutdoorGrill';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';



import {useHistory, useLocation} from "react-router-dom";


const useStyles = makeStyles({
  root: {},
});

export default function BottomNav() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const [value, setValue] = React.useState(location.pathname);


  return (
    <BottomNavigation
    style={{
        position : "fixed",
        bottom : "0px",
        left : "0px",
        right : "0px"
    }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        history.push(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Order" value= "/order" icon={<AddShoppingCartIcon />} />
      <BottomNavigationAction label="GoOut" value= "/out" icon={<OutdoorGrillIcon />} />
      <BottomNavigationAction label="Gold" value= "/gold" icon={<StarsRoundedIcon />} />
      <BottomNavigationAction label="Search" value= "/search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Profile" value= "/profile" icon={<PersonIcon />} />
    </BottomNavigation>
  );
}