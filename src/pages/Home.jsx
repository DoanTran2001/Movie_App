import React from 'react'
import HeroSlide from '../components/Hero-Slide/HeroSlide'
import {} from '../api/testAPI'
import { Link } from 'react-router-dom'
import { OutlineButton } from '../components/Button/Button'
import MoveList from '../components/MovieList/MoveList'
import { category, movieType, tvType } from '../api/tmdbApi'

function Home() {
  return (
    <>
      <HeroSlide />
      <div className="container">

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MoveList category={category.movie} type={movieType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MoveList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MoveList category={category.tv} type={tvType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated TV</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MoveList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  )
}

export default Home
