import React from 'react'
import { Link } from 'react-router-dom';
import apiConfig from '../../api/apiConfig';
import { category } from '../../api/tmdbApi'
import Button from '../Button/Button';
import "./MovieCard.scss"

function MovieCard({movieItem, category: categoryCard}) {
  const link = "/" + category[categoryCard] + "/" + movieItem.id;
  const bg = apiConfig.w500Image(movieItem.poster_path || movieItem.backdrop_path);

  return (
    <Link to={link}>
      <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{movieItem.title || movieItem.name}</h3>
    </Link>
  )
}

export default MovieCard
