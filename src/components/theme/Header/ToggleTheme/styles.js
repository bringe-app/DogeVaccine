import styled from 'styled-components';

export const Wrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s all;
  margin-top: 2px;

  &:focus {
    outline: none;
    transition: 0.3s all;
  }

  @media (max-width: 960px) {
    text-align: left;
  }

  img {
    width: 24px;
    margin-bottom: unset;
  }
  img.toggle-theme {
    margin-right: 40px;
  }
  br {
    display: none;
  }
  @media (max-width: 960px) {
    br {
      display: block;
    }
    img.toggle-theme {
      margin-bottom: 15px;
    }
  }
`;
