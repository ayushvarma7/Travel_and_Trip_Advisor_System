import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'; 
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked}) =>{

    const classes=useStyles(); //calling the hook
    const isDesktop=useMediaQuery('(min-width:600px)'); //mobile compatibility

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
            bootstrapURLKeys={{key:'AIzaSyC8fXFt4-4PmYlDYlNyDUB6kpKFiuP4hQw'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50,50,50,50]}
            options={''}
            onChange={(e)=>{
                
                setCoordinates({lat: e.center.lat, lng:e.center.lng});
                setBounds({ne: e.marginBounds.ne, sw:e.marginBounds.sw})
            }}
            onChildClick={(child)=>(setChildClicked(child))}> 
                {
                    places?.map((place, index)=>(
                        <div 
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={index}
                        >
                            {
                                !isDesktop ? (
                                    <LocationOnOutlinedIcon 
                                    color="primary" fontSize="large"
                                    />
                                ) : (
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography className={classes.Typography} variant="subtitle2" gutterBottom>
                                            {place.name}
                                        </Typography>
                                        <Typography>
                                            <img 
                                            className={classes.pointer} 
                                            src= {place.photo ? place.photo.images.small.url : 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'} 
                                            alt={place.name} />
                                        </Typography>
                                        <Rating size="small" value={Number(place.rating)} readOnly />
                                    </Paper>
                                )
                            }

                        </div>
                    ))
                }
            </GoogleMapReact>
        </div>
    );
}


export default Map;