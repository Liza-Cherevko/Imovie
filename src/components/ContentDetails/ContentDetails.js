import { Button } from '@mui/material'
import React, { useState } from 'react'
import { img500x500 } from '../../utils/img';
import AppModal from '../../components/Modal/AppModal';

export default function ContentDetails({ movie }) {
  const [rate, setRate] = useState(movie.vote_average);
   const movieID= movie?.id

 
  return (
    <div className='cards' id='bright' style={{color:'white'} }>
      <div className='info_section'>
      
          <div className='movie_header'>
          <img className='image' alt='logo' src={ `${img500x500}/${movie?.poster_path}`} />
          <div className='header_info'>
          <h1 className='movie_name'>{movie?.title}</h1>
          <h4 className='movie_release'>{movie?.release_date}</h4>
            <span className={` range ${rate > 6 ? 'range-green' :  'range-orange'}`}> { movie?.vote_average}</span>
        </div>

        </div>
        <div className='movie_desc'>
        <p className='original_title'>{movie?.original_title}</p>
          <p className='text'>{movie?.overview}</p>
          <AppModal id={movieID}  >
            <li style={{listStyle:'none'}}>
            <Button style={{color:'rgb(243 185 23'}}> view trailer</Button>
            </li>
       </AppModal>
        </div>
      </div>

</div>



  )
}

