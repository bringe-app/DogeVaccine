import React from 'react';
import { Container } from 'components/common';
import tokenomics1 from 'assets/images/tokenomics1.png';
import tokenomics2 from 'assets/images/tokenomics2.jpg';
import tokenomics3 from 'assets/images/tokenomics3.png';
import { Wrapper, TokenomicsWrapper, InsideWrapper, Square } from './styles';

export const Tokenomics = () => (
  <Wrapper>
    <TokenomicsWrapper as={Container}>
      <h2>Tokenomics</h2>
      <InsideWrapper>
        <Square>
          <img src={tokenomics1} alt="tokenomics1" />
          <h4>15% Tax on Transactions</h4>
          <span>5% Liquidity</span>
          <br />
          <span>5% Distributed to holders</span>
        </Square>
        <br />
        <Square>
          <img src={tokenomics2} alt="tokenomics2" />
          <h4>Original Supply</h4>
          <span>21 M supply, to honor satoshi.</span>
          <br />
          <span>50% burned and renounced ownership</span>
        </Square>
        <br />
        <Square>
          <img src={tokenomics3} alt="tokenomics3" />
          <h4>Profit</h4>
          <span>
            We reward holders with a 5% transaction tax which puts $DGV directly into your wallet every time someone
            buys or sells.
          </span>
          <br />
          <span>Token address: 0x2C70ab82f01b124a5B21e54EF1751A99b78f4269</span>
        </Square>
      </InsideWrapper>
      <Square>
        <h4>How to buy</h4>
        <span>
          Connect your $BNB wallet (metamask, binance smart chain, trust wallet on smartphone and many others) to
          pancakeswap using the blue connect button in the upper-right corner, press on the settings button &nbsp;
          <svg viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" className="sc-bdvvaa dqTYWn">
            <path d="M0 0h24v24H0z" fill="black" opacity="0.3"></path>
            <path
              fill="#1fc7d4"
              d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"
            ></path>
          </svg>
          &nbsp; set the slippage to 12% and then input an amount of $BNB you'd like to have in $DGV and vice-versa and
          just wait to get rich 🤑.
        </span>
        <iframe
          src="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x2C70ab82f01b124a5B21e54EF1751A99b78f4269"
          frameBorder="0"
          height="600"
          title="Pancake Swap Fram"
        ></iframe>
      </Square>
    </TokenomicsWrapper>
  </Wrapper>
);
