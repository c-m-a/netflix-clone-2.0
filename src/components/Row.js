import { useEffect, useState } from 'react';

import styled from 'styled-components';

import axios from '../axios';

export default function Row({ title, fetchUrl, isLargeRow=false }) {
  const [movies, setMovies] = useState([]);
  const baseImgURL = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);


  return (
    <RowContainer>
      <h2>{title}</h2>
      <ImagesContainer isLargeRow={isLargeRow}>
        {movies?.map(movie => (
        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
            <img
              key={movie.id}
              src={`${baseImgURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              data={movie.backdrop_path}
              alt={movie.name}
              isLargeRow
            />
          ))
        )}
      </ImagesContainer>
    </RowContainer>
  );
}

const RowContainer = styled.div`
  color: var(--row-color);
  padding: 2rem;

  > h2 {
    margin-bottom: 1rem;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: scroll;
  padding-left: 2rem;
  height: ${props => props.isLargeRow ? '28rem' : '11rem'};

  ::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none; /* Firefox */

  > img {
    max-height: ${props => props.isLargeRow ? '25rem' : '10rem'};
    margin-right: 1rem;
    transition: transform 450ms;
  }

  > img:hover {
    transform: scale(1.09);
    opacity: 1;
  }
`;
