import React from "react";
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from '@material-ui/lab/Rating';

import useStyles from "./styles";
import { PlaceSharp } from "@material-ui/icons";

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
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>

                {/* now searching for all awards for the restaurant */}
                {place?.awards?.map((award)=>(
                    <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                        <img src={award.images.small} alt={award.display_name} />
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                        </Box>
                ))}
                {/* cuisine type  */}
                {place?.cuisine?.map(({name})=>(
                    <Chip key={name} size="small" label={name} className={classes.chip}/>
                ))}

                {place?.address && (
                    <Typography gutterBottom variant="subtitle2 " color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon /> {place.address}
                    </Typography>
                )}

                {place?.phone && (
                    <Typography gutterBottom variant="subtitle2 " color="textSecondary" className={classes.spacing}>
                        <PhoneIcon /> {place.phone}
                    </Typography>
                )}

                <CardActions>                        
                    <Button size="small" color="primary" onClick={()=>window.open(place.web_url, '_blank')}>  {/*using _blank, it opens in new tab  */}
                        Trip Advisor
                    </Button>
                    <Button size="small" color="primary" onClick={()=>window.open(place.website, '_blank')}>  {/*using _blank, it opens in new tab  */}
                        Website
                    </Button>
                </CardActions>
            
            </CardContent>
        </Card>
    );
}


export default PlaceDetails;