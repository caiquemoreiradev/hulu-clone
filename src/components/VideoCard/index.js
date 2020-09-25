import React, { forwardRef } from 'react';

import TextTruncate from 'react-text-truncate';
import ThumbSharpIcon from '@material-ui/icons/ThumbUpSharp';

import './styles.css';

const base_url = 'https://image.tmdb.org/t/p/original/'

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard__container">
      <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="The boys" />

      <div className="videoCard__infos">
        <TextTruncate
          line={2}
          element='p'
          truncateText='...'
          text={movie.overview}
        />
        <h2>{movie.title}</h2>
        <div className='videoCard__stats'>
          <p>{movie.media_type && `${movie.media_type}`}</p>
          <p>{movie.release_date || movie.first_air_date}</p>
          <ThumbSharpIcon />
          <p>{movie.vote_count}</p>
        </div>
      </div>
    </div>
  );
});

export default VideoCard;