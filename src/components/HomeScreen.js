import styled from 'styled-components';

import Banner from './Banner';
import Nav from './Nav';

export default function HomeScreen() {
  return (
    <HomeScreenContainer>
      <Nav />
      <Banner />
    </HomeScreenContainer>
  );
}

const HomeScreenContainer = styled.div``;
