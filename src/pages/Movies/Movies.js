import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import ContentDetails from '../../components/ContentDetails/ContentDetails';
import Genre from '../../components/Genre/Genre';
import AddPagination from '../../components/Pagination/AddPagination';
import genresIDs  from '../../utils/genresIDs';


function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(5);
  const [numberOfPages, setNumberOfPages] = useState(10)
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([])
  console.log(selectedGenres);
  console.log(genresIDs(selectedGenres));

  const generesIds = genresIDs(selectedGenres);

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=1160cac5ff26e1cc795d5733856ce01c&
      language=en-US&sort_by=popularity.
      desc&include_adult=false&include_video=true&page=${page}&with_genre=${generesIds}`)
      setMovies(data?.results);
      setLoading(false);
      setNumberOfPages(data?.total_pages)
    } catch (error) {
      setIsError(true);
    }
  }


useEffect(()=>{
  fetchMovies()
},[page, selectedGenres]);



  return (
    <>
      <Genre genres={genres}
        setGenres={setGenres}
        selectedGenres={selectedGenres}
        setSelectedGenres={ setSelectedGenres}
      />
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


