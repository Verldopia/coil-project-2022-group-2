import styled from 'styled-components';

export const Wrapper = styled.div`
  display: Flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid grey;
  border-radius: 1rem;
  height: 100%;

  button {
    border-radius: 0 0 1rem 1rem;
  }

  img {
    max-height: 10rem;
    object-fit: cover;
    border-radius: 1rem 1rem 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
