import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import ContentDetails from '../../components/ContentDetails/ContentDetails';
import { Box } from '@mui/system';
import { autocompleteClasses } from '@mui/material';
const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=1160cac5ff26e1cc795d5733856ce01c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=1160cac5ff26e1cc795d5733856ce01c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1')
      setMovies(data?.results)
      setLoading(false)
    } catch (error) {
      setIsError(true)
    }
  }


useEffect(()=>{
  fetchMovies()
},[]);
console.log(movies);


  return (
    <Box>
          <div  className='movie_list' >
        {movies?.map(movie => (
          <div  key={movie.filmId} onClick={() => console.log(movie.id)}  >
            <ContentDetails movie={movie}  />
            </div>
        )) }
   
    </div>
 </Box>
  )
}

export default Movies


// useEffect(() => {
//   axios.get( API_URL).then(({ data }) => {
//       console.log(data)
//       setMovie(data)
//   })
// }, []);
//   console.log(movie);