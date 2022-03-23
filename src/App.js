import React, { useState, useEffect } from 'react'
import { CssBaseline, Grid } from '@material-ui/core'

import { getPlacesData } from './api';
import Header from './components/Header/Header'
import List from './components/List/List'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'
import Map from './components/Map/Map'


const App= ()=> {

  const [places, setPlaces]=useState([]);

  useEffect(()=>{
    getPlacesData()   //.then since it is async function
            .then((data)=>{
              console.log(data);
              setPlaces(data);
            })
  },[]); //since dependency array [] is empty, so getplacesdata is called only at the start

  return (
    <>
      <CssBaseline/>
      <Header/>
      <Grid container spacing ={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
          <List/>
        </Grid>

        <Grid item xs={12} md={8}>
          <Map/>
        </Grid>

      </Grid>
    </>
  )
}

export default App;