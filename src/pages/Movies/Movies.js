import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import ContentDetails from '../../components/ContentDetails/ContentDetails';
import AddPagination from '../../components/Navbar/Pagination/AddPagination';


function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=1160cac5ff26e1cc795d5733856ce01c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`)
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
    <>
      
          <Grid container direction='row' justify='center' alignItems='center' marginTop='150px'>
     {movies?.map(movie => (
       <Grid item md={6} >
       <ContentDetails movie={movie} key={movie.filmId} onClick={() => console.log(movie.id)}  />
       </Grid>
      
     ))}
    <AddPagination/>
      </Grid>

</>
  )
}

export default Movies


