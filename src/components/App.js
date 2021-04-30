import styled from 'styled-components';

import Banner from './Banner';
import HomeScreen from './HomeScreen';

export default function App() {
  return (
    <AppContainer>
      <HomeScreen />
      <Banner />
    </AppContainer>
  );
}

const AppContainer = styled.div``;
