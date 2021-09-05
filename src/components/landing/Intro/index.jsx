import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import cryingdoge from 'assets/images/cryingdoge.png';
import pancake from 'assets/images/pancakeswap512.svg';
import poocoin from 'assets/images/poocoin512.png';
import twitter from 'assets/images/twitter512.svg';
import telegram from 'assets/images/telegram512.svg';
import bscscan from 'assets/images/bscscan-logo-circle.svg';
import oneinch from 'assets/images/1inch512.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>{'Doge\nVaccine'}</h1>
          <h4>{'Empowering The Doge Community with:\nDoge Vaccine $DGV'}</h4>
          <br />
          <Button as={AnchorLink} href="#contact">
            Contact
          </Button>
          <Button as={AnchorLink} href="/" style={{ marginLeft: '24px' }}>
            DxSale
          </Button>
        </Details>
        <Thumbnail>
          <img src={cryingdoge} alt="crying-doge" />
          <br />
          <a
            href="https://poocoin.app/tokens/0x2C70ab82f01b124a5B21e54EF1751A99b78f4269"
            target="_blank"
            rel="noreferrer"
          >
            <img className="partners" src={poocoin} alt="poop" />
          </a>
          <a
            href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x2C70ab82f01b124a5B21e54EF1751A99b78f4269"
            target="_blank"
            rel="noreferrer"
          >
            <img className="partners" src={pancake} alt="cake" />
          </a>
          <a href="https://app.1inch.io/#/56/swap/BNB/DGV" target="_blank" rel="noreferrer">
            <img className="partners" src={oneinch} alt="oneinch" />
          </a>
          <a href="https://t.me/dogevax" target="_blank" rel="noreferrer">
            <img className="partners" src={telegram} alt="telegram" />
          </a>
          <a
            href="https://bscscan.com/token/0x2C70ab82f01b124a5B21e54EF1751A99b78f4269"
            target="_blank"
            rel="noreferrer"
          >
            <img className="partners" src={bscscan} alt="bscscan" />
          </a>
          <a href="https://twitter.com/dogevax" target="_blank" rel="noreferrer">
            <img className="partners" src={twitter} alt="twitter" />
          </a>
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
