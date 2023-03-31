import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Grid } from '@mui/material';
import ContentDetalis from '../../components/ContentDetalis/ContentDetalis';
const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=1160cac5ff26e1cc795d5733856ce01c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_geners=28555';
function Movies() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

// const fetchMovies= async()=>{
//   try{
//     const {data} =await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=1160cac5ff26e1cc795d5733856ce01c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_geners=28555')
//     setMovie(data?.result);
//     console.log(data.results);
//     setLoading(false);
//   } catch (error) {
//     setIsError(true);

//   }
//   console.log(movie)
// }
// useEffect(()=>{
//   fetchMovies()
// },[]);

useEffect(() => {
  axios.get( API_URL).then(({ data }) => {
      console.log(data)
      setMovie(data)
  })
}, []);
  console.log(movie);
  
  return (
    <Grid container spacing={2}>
      <Grid item  xs={6}>
        {movie && movie.length && movie.map((item) => { 
       <ContentDetalis/> 
         
        }) }
       
      </Grid>

    </Grid>
  )
}

export default Movies