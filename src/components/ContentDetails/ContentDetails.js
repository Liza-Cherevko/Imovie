import React from 'react'
import {img500x500 } from '../../utils/img'

export default function ContentDetails({movie})  {
  return (
    <div className='movie_card' id='bright' style={{color:'white'} }>
      <div className='info_section'>
        <div className='movie_header'>
          <img className='image' alt='logo' src={ `${img500x500}/${movie?.poster_path}`} />
          <h1>{movie?.title}</h1>
          <h4>{movie?.release_date}</h4>
          <span className='range'>{movie?.vote_average}</span>
          <p className='original_title'>{movie?.original_title}</p>
        </div>
        <div className='movie_desc'>
          <p className='text'>{movie?.overview}</p>
        </div>
      </div>
</div>



  )
}

