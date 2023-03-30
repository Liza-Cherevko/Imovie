import React, {useState,useEffect} from 'react';
import axios from 'axios'

function Movies() {
const [movies, setMovies] = useState([]);

const fetchMovies= async()=>{
  try{
    const {data} =await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=1160cac5ff26e1cc795d5733856ce01c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_geners=28555')
setMovies(data?.result)
  } catch(error){
  console.log(error);
  }
}
useEffect(()=>{
  fetchMovies()
},[]);

  return (
    <div>Movies</div>
  )
}

export default Movies