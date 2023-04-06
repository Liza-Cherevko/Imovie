import React, { useEffect, useState } from 'react';
import Chip from '@mui/material/Chip';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Genre = ({genres, setGenres,selectedGenres,setSelectedGenres }) => {
    let { id } = useParams();
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

// handle add 
    const handleAddGenres = genre => { 
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres?.filter(g=>g.id!==genre?.id))
    }
// handle remove 
const handleRemoveGenres = genre => { 
    setSelectedGenres(selectedGenres?.filter(selected=>selected?.id !== genre?.id));
    setGenres([...genres, genre])
}


  return (
      <div style={{marginTop:'80px', display:'flex', flexWrap:'wrap'}}>
            <div style={{ padding: '10px 0' }}  >
          {selectedGenres?.map(genre=>(
              <Chip
                  onDelete={()=>handleRemoveGenres(genre)}
                  style={{
                  backgroundColor: '#b7b7a4',
                  color: '#000',
                  fontSize: '1.2em',
                  margin: '3px'
              }}
                  clickable label={genre?.name} />
          )) }
{genres?.map(genre => (
  
    <Chip
               key={genre.id}
               onClick={ ()=>handleAddGenres(genre)}
               label={genre.name }
               color='secondary'
               style={{fontSize:'1.2em', margin:'3px'}}             
                  />
                 
          )) }
          


          </div>
      </div>
  )
}

export default Genre