import React, { useContext, Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import doge1 from 'assets/images/doge1.png';
import doge2 from 'assets/images/doge2.png';
import doge3 from 'assets/images/doge3.png';
import doge4 from 'assets/images/dogearmor.png';
import { Wrapper, VisionWrapper, Details, Thumbnail, SlideWrapper } from './styles';

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <SlideWrapper style={{ float: this.props.float }}>
        <Slider {...settings}>
          <div>
            <img src={this.props.img1} alt="img1" />
          </div>
          <div>
            <img style={{ width: this.props.width }} src={this.props.img2} alt="img2" />
          </div>
        </Slider>
      </SlideWrapper>
    );
  }
}

export const Vision = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <VisionWrapper as={Container}>
        <Thumbnail>
          <SimpleSlider img1={doge1} img2={doge2} />
        </Thumbnail>
        <Details theme={theme}>
          <h1>Vision</h1>
          <p>
            &#x1f430; DogeVaccine is a Doge &#x1f436; community focused crypto, that aims to empower and fuck &#x1f459;
            with doge whales, by enabling transaction fees to be used as payment to vaccinate Shibas, and lets users
            interact with their Virtual shibas by petting them and talking with them. With DogeVaccine &#x1f302; we want
            to create a new type of currency &#x1f4b8;, specifically aimed at Shiba and science lovers. By using clever
            Ethereum and Binance smart contract techniques, we will be able to use the funds realized by the use of our
            coin to create interactive Shiba games, and most importantly, reward HODLERS, which we will use for
            generating value in the style of aavegotchi &#x1f47b;.
          </p>
        </Details>
      </VisionWrapper>
      <VisionWrapper as={Container}>
        <Details theme={theme}>
          <h1>Community</h1>
          <p>
            DogeVaccine is a community first coin. We want to create a grassroots movement to change online payments
            forever. The best way to progress the DeFi space is by starting with the small, trivial payments of the
            internet. To show the potential of the technology.
          </p>
        </Details>
        <Thumbnail>
          <SimpleSlider float="right" img1={doge3} img2={doge4} width="70%" />
        </Thumbnail>
      </VisionWrapper>
      <VisionWrapper as={Container}>
        <Details theme={theme}>
          <h1>Giving back</h1>
          <p>
            9% from each buy and 9% from each sell will go proportionally to the holders of $DGV in BUSD. Extra 3% from
            each transaction will go to the Liquidity Pool and 1% will go to the marketing wallet.
          </p>
        </Details>
      </VisionWrapper>
    </Wrapper>
  );
};
