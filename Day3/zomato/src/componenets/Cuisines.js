import React, { useState } from 'react';
import { Avatar, Box, Button} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
      padding: "10px"
  },
  avatar: {
    padding: "10px"
},
});

export default function Cuisines() {

    const arr = new Array(15);
    const [less, setLess] = useState(true);
    const [show, setShow] = useState("Show More");
    arr.fill(0);

    const classes = useStyles();

    return (
        <Box className={classes.root} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
           { arr.slice(0, less?7:arr.length).map((item, idx)=>{
            return <Avatar className={classes.avatar} key ={idx} src ="/logo192.png"/>
        })}
        <Button onClick={()=>{
            setLess(!less);
            if(show==="Show More"){
                setShow("Show Less");
            }
            else{
                setShow("Show More");
            }
        }}>{show}</Button>
        </Box>
    );
}