import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import "./MovieList.scss"
import tmdbApi from '../../api/tmdbApi';

import apiConfig from '../../api/apiConfig';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from '../MovieCard/MovieCard';

function MoveList({category, type, id}) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};
      if(type !== "similar") {
        switch(category) {
          case category.movie: 
            response = await tmdbApi.getMoviesList(type, {params});
            break;
          default:
            response = await tmdbApi.getTvList(type, {params});
        }
      } else {
        response = await tmdbApi.similar(category, id);
      }
      setItems(response.results);
    }
    getList();
  }, [category, id, type]);

  return (
    <div className='movie-list'>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={'auto'}
      >
        {
          items.map((item, index) => (
            <SwiperSlide key={index}>
              {/* <img src={apiConfig.w500Image(item.poster_path)} alt="" /> */}
              <MovieCard movieItem={item} category={category} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

MoveList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
export default MoveList
