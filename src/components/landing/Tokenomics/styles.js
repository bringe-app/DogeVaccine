import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 1rem;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const TokenomicsWrapper = styled.div`
  padding: 3rem 0;

  iframe {
    width: 100%;
    margin: 0;
    margin-top: 20px;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 240px;
  }

  h2 {
    font-size: 23pt;
    color: ${({ theme }) => (theme === 'dark' ? '#5F4B0C' : '#212121')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'hard-light')};
    }
  }
`;
export const InsideWrapper = styled.div`
  padding: 0.8rem 0;
  display: flex;
  flex-direction: row;

  @media (max-width: 960px) {
    flex-direction: row;
  }

  iframe {
    width: 100%;
    margin: 0;
    margin-top: 20px;
  }
`;

export const Square = styled.div`
  h4 {
    font-size: 25px;
  }
  span {
    font-size: 20px;
  }
  font-family: 'Jost Medium';
  padding: 3rem 2rem;
  margin-right: 1rem;
  border-radius: 10px;
  background-color: #926c15;

  @media (max-width: 960px) {
    h4 {
      font-size: 21px;
    }
    span {
      font-size: 16px;
    }
  }
`;
