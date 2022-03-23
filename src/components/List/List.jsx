import React, { useState } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

import CARD from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = () =>{
    const classes=useStyles();
    const [type, setType]= useState('Restaurants');
    const [rating, setRating]=useState('');

    //places now
    const places=[{
        name:'Cool Place'
    },
    {
        name:'Hello Moto'
    },
    {
        name:'Yello'
    },
    {
        name:'Cool Place'
    },
    {
        name:'Hello Moto'
    },
    {
        name:'Yello'
    },
    {
        name:'Cool Place'
    },
    {
        name:'Hello Moto'
    },
    {
        name:'Yello'
    },
];

    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurant, Hotels and Attractions around you! </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e)=> setType(e.target.value)}>
                    <MenuItem value="Restaurants">Restaurants</MenuItem>
                    <MenuItem value="Hotels">Hotels</MenuItem>
                    <MenuItem value="Attraction">Attraction</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={rating} onChange={(e)=> setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid spacing={3} className={classes.list}>
                {places?.map((place, i)=>(
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}


export default List;