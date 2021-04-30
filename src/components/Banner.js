import { useEffect, useState } from 'react';
import styled from 'styled-components';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';

import axios from '../axios';
import requests from '../Requests';

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]);

      return request;
    }

    fetchData();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };

  return (
    <BannerContainer movieImg={movie.backdrop_path}>
      <BannerContent>
        <BannerTitle>{movie?.title || movie?.name || movie?.original_name}</BannerTitle>
        <BannerButtons>
          <BannerButton active>
            <PlayArrowIcon />
            <span>Play</span>
          </BannerButton>
          <BannerButton>
            <AddIcon />
            <span>My List</span>
          </BannerButton>
        </BannerButtons>
        <BannerDescription>
          {truncate(movie?.overview, 150)}
        </BannerDescription>
      </BannerContent>
      <BannerFadeBottom />
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  position: relative;
  color: var(--banner-color);
  padding: 0 3rem;
  background-size: cover;
  background-image: url('${props => props.movieImg ? `https://image.tmdb.org/t/p/original/${props.movieImg}` : ''}');
  background-position: center center;
  height: 44.8rem;
  object-fit: contain;
`;

const BannerContent = styled.div`
  padding-top: 14rem;
  height: 19rem;
`;

const BannerButtons = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const BannerButton = styled.button`
  display: flex;
  cursor: pointer;
  color: ${props => props.active ? 'var(--banner-button-hover-color)' : 'white'};
  outline: none;
  border: none;
  font-weight: 700;
  margin-right: 1rem;
  padding: .7rem 2rem;
  border-radius: .2rem;
  background-color: ${props => props.active ? 'var(--banner-button-hover-bg-color)' : 'rgba(51, 51, 51, .5)'};

  :hover {
    color: var(--banner-button-hover-color);
    background-color: var(--banner-button-hover-bg-color);
    transition: all .2s;
  }

  .MuiSvgIcon-root {
    font-size: 2rem;
    margin-right: .5rem;
  }

  > span {
    display: flex;
    align-items: center;
  }
`;

const BannerTitle = styled.h1`
  width: 100%;
  font-size: 3.3rem;
  font-weight: 800;
  padding-bottom: .3rem;
`;

const BannerDescription = styled.p`
  max-width: 34rem;
  width: 100%;
`;

const BannerFadeBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 7.4rem;
  width: 100%;
  background-image: linear-gradient(
    180deg,
    transparent,
    var(--banner-fade-top-color),
    var(--banner-fade-bottom-color)
  );
`;
