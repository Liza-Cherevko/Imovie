import { Button } from '@mui/material'
import React, { useState } from 'react'
import { img500x500 } from '../../utils/img';

export default function ContentDetails({ movie }) {
  const [rate, setRate] = useState(movie.vote_average);
 

  const rangeBorder = movie.vote_average > 7 ? 'borderColor:green ': movie.vote_average>5 ? 'borderColor:orange' : 'borderColor:red'

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
          <Button color='error'> view trailer</Button>
        </div>
      </div>

      {/* <div className='right'>
      <img className='img-bg' alt='logo' src={ `${img500x500}/${movie?.backdrop_path}`} />
   </div> */}
</div>



  )
}

