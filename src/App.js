import React, { useState, useEffect } from 'react'
import { CssBaseline, Grid } from '@material-ui/core'

import { getPlacesData } from './api/index';
import Header from './components/Header/Header'
import List from './components/List/List'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'
import Map from './components/Map/Map'


const App= ()=> {

  const [places, setPlaces]=useState([]);
  const [coordinates, setCoordinates]=useState({});
  const [bounds, setBounds]=useState({});

  // useeffect to get the user loc on opening the app
  useEffect(()=>{
    // browser gets our geolocation immediately 
    navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}})=>{
      setCoordinates({lat:latitude, lng:longitude});
    })
  },[]); //since dependency array [] is empty, so getplacesdata is called only once

  useEffect(()=>{
    // console.log(coordinates, bounds);     
    getPlacesData(bounds.sw, bounds.ne)   //.then since it is async function
            .then((data)=>{
              console.log(data);
              setPlaces(data);
            })
  },[coordinates, bounds]); //since dependency array [] has bounds and coords, so getplacesdata is called everytime these change

  return (
    <>
      <CssBaseline/>
      <Header/>
      <Grid container spacing ={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
          <List places={places}/>
        </Grid>

        <Grid item xs={12} md={8}>
          <Map 
          setCoordinates={setCoordinates} 
          setBounds={setBounds}
          coordinates={coordinates}
          />
        </Grid>

      </Grid>
    </>
  )
}

export default App;