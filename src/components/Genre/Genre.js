import React, { useEffect, useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import axios from 'axios';


const Genre = ({genres, setGenres }) => {

    const [isError, setIsError] = useState(false); 
    
  const fetchGenre = async () => {
      const { data } = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=1160cac5ff26e1cc795d5733856ce01c& language=en - US`
      );
      setGenres(data?.genres)
    } 
  


useEffect(()=>{
    fetchGenre()
},[]);



  return (
      <div style={{marginTop:'80px'}}>
          
          {genres?.map(genre => (
              <div style={{ padding: '10px 0' }} key={genre.id } >
              <Chip
                  label={genre.name }
                      color='secondary'
                       style={{fontSize:'1.2em', margin:'3px'}}             
                  />
                    </div>
          )) }
          

   
      </div>
  )
}

export default Genre