import styled from 'styled-components';

export default function Row({ title }) {
  return (
    <RowContainer>
      <h2>{title}</h2>
    </RowContainer>
  );
}

const RowContainer = styled.div`

`;
