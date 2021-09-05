import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import dogelogo from 'assets/icons/favicon-512.png';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand, Title } from './styles';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" theme={theme}>
        <img src={dogelogo} alt="doge-logo" />
      </Brand>
      <Title theme={theme}>
        <h1>DogeVax</h1>
      </Title>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
