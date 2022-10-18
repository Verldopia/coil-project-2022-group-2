import styled from 'styled-components';

export const Wrapper = styled.div`
  display: Flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid grey;
  padding-bottom: 1rem;

  img {
    max-width: 5rem;
    object-fit: cover;
    margin-left: 1rem;
  }

  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }
`;
