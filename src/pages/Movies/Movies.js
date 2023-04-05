import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import ContentDetails from '../../components/ContentDetails/ContentDetails';
import Genre from '../../components/Genre/Genre';
import AddPagination from '../../components/Pagination/AddPagination';


function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(10)
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [genres, setGenres] = useState([]);
  console.log(genres);
  // console.log(movies);
  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=1160cac5ff26e1cc795d5733856ce01c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
      setMovies(data?.results);
      setLoading(false);
      setNumberOfPages(data?.total_pages)
    } catch (error) {
      setIsError(true);
    }
  }


useEffect(()=>{
  fetchMovies()
},[page]);



  return (
    <>
      <Genre genres={genres} setGenres={setGenres} />
          <Grid container direction='row' justify='center' alignItems='center' marginTop='100px'>
     {movies?.map(movie => (
       <Grid item md={6} key={movie.id} onClick={() => console.log(movie.id)} >
       <ContentDetails movie={movie}    />
       </Grid>
      
     ))}
        <AddPagination setPage={setPage} pageNumber={ numberOfPages} />
      </Grid>

</>
  )
}

export default Movies


