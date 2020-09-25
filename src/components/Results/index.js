import React, { useState, useEffect } from 'react';

import './styles.css';
import VideoCard from '../VideoCard';
import FlipMove from 'react-flip-move';

import axios from '../../services/axios';

function Results({ selectedOption }) {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption)
      setMovies(request.data.results)
      return request;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className="results__container">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;