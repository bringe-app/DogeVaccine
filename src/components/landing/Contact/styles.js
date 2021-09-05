import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2.8rem 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    border: none;
  }
  border-radius: 20px;
  border: 4px solid #805b10;
`;

export const Details = styled.div`
  flex: 1;
  padding-right: 2rem;

  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
    order: 1;
  }

  h1 {
    font-size: 26pt;
    color: #212121;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`;

export const Thumbnail = styled.div`
  display: block;
  flex: 1;

  @media (max-width: 960px) {
    display: none;
  }

  img {
    width: 100%;
  }
`;
