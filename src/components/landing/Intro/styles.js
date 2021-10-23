import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/overlay.svg';

export const Wrapper = styled.div`
  padding: 2.5rem;
  padding-bottom: 1rem;
  background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const IntroWrapper = styled.div`
  padding: 3.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 82pt;
    font-family: 'Jost Bold';
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
    white-space: pre-line;

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'hard-light')};
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 1rem;
    font-size: 32pt;
    font-weight: normal;
    font-family: 'Jost Medium';
    white-space: pre-wrap;
    color: ${({ theme }) => (theme === 'light' ? '#9c8933' : '#5F4B0C')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'hard-light')};
    }

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
  #desc {
    font-size: 15pt;
    color: ${({ theme }) => (theme === 'light' ? '#5F4B0C' : '#ffffff')};

    @media (max-width: 680px) {
      font-size: 12pt;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  margin-left: 33px;
  font-size: 13pt;
  font-weight: 900;
  font-family: 'Jost Bold';

  img {
    width: 65%;
  }
  img.partners {
    margin-right: 30px;
    width: 9%;
    transition: all 0.5s ease;
  }
  img.partners:hover {
    transform: scale(1.125);
  }
  @media (max-width: 960px) {
    img.partners {
      width: 11%;
    }
  }
`;
