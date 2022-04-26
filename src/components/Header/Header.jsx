import React, {useEffect, useState} from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

const Header = ({getInfo}) =>{

    const [quote, setQuote]= useState('Loading...');
    const [author, setAuthor]= useState('Loading...');

    // const randomQuote= ()=>{
    //     fetch("https://api.quotable.io/random").then(res=>res.json()).then(result=>{
    //         // console.log(result);
    //         setQuote(result.content);
    //         setAuthor(result.author);
    //     })
    // }

    async function getQuotes(){
        const result=await fetch("https://api.quotable.io/random");
        setQuote(result.content);
        setAuthor(result.author);
    }

    useEffect(()=>{
        getQuotes();
    },[])

    const classes = useStyles();
    return (
        <AppBar position="static">
            {/* {getQuotes} */}
            <Toolbar className={classes.toolbar}>
                <button onClick={getInfo} >Press to get info!</button>
                <Typography variant="h5" className={classes.title}>
                    Trip Advisor {quote}
                </Typography>
                <Box display="flex">
                <Typography variant="h6" className={classes.title}>
                    Explore new places!
                </Typography>
                {/* <Autocomplete> */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase placeholder="Search..." classes={{root: classes.inputRoot, input: classes.inputinput}} />
                    </div>
                {/* </Autocomplete> */}
                </Box>
            </Toolbar>

        </AppBar>
    );
}


export default Header;
