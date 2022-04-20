import React from "react";
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from '@material-ui/lab/Rating';

import useStyles from "./styles";

const PlaceDetails = ({place}) =>{
    console.log(place);
    const classes=useStyles();

    return (
        <Card elevation={6}>
            <CardMedia 
            style={{height:350}}
            image={place.photo ? place.photo.images.large.url : 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'} 
            title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
            </CardContent>
        </Card>
    );
}


export default PlaceDetails;