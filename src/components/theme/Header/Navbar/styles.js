import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Jost Bold', sans-serif;
`;

export const Brand = styled.img`
  margin-top: 1.45rem;
  width: 64px;
  overflow: hidden;
`;

export const Title = styled.h1`
  flex: 1;
  margin-top: 1.45rem;
  margin-left: 1rem;
  display: none;

  @media (max-width: 960px) {
    display: block;
  }
`;
