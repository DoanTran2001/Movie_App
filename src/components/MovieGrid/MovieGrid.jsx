import React, { useCallback, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';
import Button, { OutlineButton } from '../Button/Button';
import Input from '../Input/Input';
import MovieCard from '../MovieCard/MovieCard';
import './MovieGrid.scss'

function MovieGrid({category}) {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const { keyword } = useParams();
  useEffect(() => {
    const getList = async () => {
      let response = null;
      if(keyword === undefined) {
        const params = {};
        switch(category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, {params});
            
        }
      } else {
        const params = {
          query: keyword
        }
        response = await tmdbApi.search(category, {params});
      }
      setItems(response.results);
      setTotalPage(response.total_pages);
    }
    getList();
  }, [category, keyword])

  const loadMore = async () => {
    let response = null;
    if(keyword === undefined) {
      const params = {
        page: page + 1
      };
      switch (category) {
        case category.movie:
          response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
          break;
        default:
          response = await tmdbApi.getTvList(tvType.popular, {params});
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword
      }
      response = await tmdbApi.search(category, {params})
    }
    setItems([...items, ...response.results]);
    setPage(page + 1);
  }
  return (
    <>
      <div className="section mb-3">
        <MovieSearch category={category} keyword={keyword}/>
      </div>
      <div className='movie-grid'>
        {
          items.map((item, index) => <MovieCard category={category} movieItem={item} key={index} />)
        }
      </div>
      {
        page < totalPage ? (
          <div className="movie-grid__loadmore">
            <OutlineButton className="small" onClick={loadMore}>Load More</OutlineButton>
          </div>
        ) : null
      }
    </>
  )
}

const MovieSearch = ({keyword: keywordBase, category: cate}) => {

  const history = useHistory();
  const [keyword, setKeyWord] = useState(keywordBase ? keywordBase : "");

  const goToSearch = useCallback(
    () => {
      if(keyword.trim().length > 0) {
        history.push(`${category[cate]}/search/${keyword}`)
      }
    }, [cate, history, keyword])
  
  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if(e.keyCode === 13) {
        goToSearch();
      }
    }
    document.addEventListener('keyup', enterEvent);
    return () => {
      document.removeEventListener('keyup', enterEvent);
    }
  }, [goToSearch]);
  return (
    <div className="movie-search">
      <Input 
        type="text"
        placeholder="Enter keyword..."
        value={keyword}
        onChange={(e) => setKeyWord(e.target.value)}
      />
      <Button className="small" onClick={goToSearch}>Go to search</Button>
    </div>
  )
}

export default MovieGrid
