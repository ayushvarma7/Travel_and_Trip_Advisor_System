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
  // LIFTING THE STATE UP METHOD for childClicked
  const [childClicked, setChildClicked]=useState(null);//to check which button is clicked 

  const [isLoading, setIsLoading]= useState(false);

  const [type, setType]= useState('Restaurants');
  
  const [rating, setRating]=useState('');
  const [filteredPlaces, setFilteredPlaces ] = useState([]);
  

  // RUNS ONLY ON THE START
  // useeffect to get the user loc on opening the app
  useEffect(()=>{
    // browser gets our geolocation immediately 
    navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}})=>{
      setCoordinates({lat:latitude, lng:longitude});
    })
  },[]); //since dependency array [] is empty, so getplacesdata is called only once

  // RUNS WHEN THERE IS SOME CHANGE IN THESE DEPENDENCY
  // useEffect(()=>{
  //   setIsLoading(true);
  //   // console.log(coordinates, bounds);     
  //   getPlacesData(type, rating, bounds.sw, bounds.ne)   //.then since it is async function
  //           .then((data)=>{
  //             // console.log(data);
  //             setPlaces(data);
  //             setIsLoading(false);
  //           })
  // },[type, coordinates, bounds]); //since dependency array [] has bounds and coords, so getplacesdata is called everytime these change

  useEffect(()=>{
    const filterPlaces= places.filter((place)=>place.rating > rating);

    setFilteredPlaces(filteredPlaces);
    
  }, [rating]);

  async function getInfo(){
    setIsLoading(true);
      console.log(coordinates, bounds);  
    console.log('getting data');
    getPlacesData(type, rating, bounds.sw, bounds.ne)   //.then since it is async function
            .then((data)=>{
              // console.log(data);
              setFilteredPlaces([]); //reset filteredPlaces data
              setPlaces(data);
              setIsLoading(false);
            })
  }

  return (
    <>
      <CssBaseline/>
      <Header getInfo={getInfo} />
      <Grid container spacing ={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
          <List places={filteredPlaces.length ? filteredPlaces : places}
                childClicked={childClicked}
                isLoading={isLoading}
                type={type}
                rating={rating}
                setType={setType}
                setRating={setRating}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Map 
          setCoordinates={setCoordinates} 
          setBounds={setBounds}
          coordinates={coordinates}
          places={filteredPlaces.length ? filteredPlaces : places}
          setChildClicked={setChildClicked}
         
          />
        </Grid>

      </Grid>
    </>
  )
}

export default App;