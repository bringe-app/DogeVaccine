import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import sunIcon from 'assets/icons/sun.svg';
import moonIcon from 'assets/icons/moon.svg';
import twitter from '../../../../../static/icons/twitter.svg';
import { Wrapper } from './styles';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper type="button" onClick={toggleTheme}>
      <img className="toggle-theme" src={theme === 'light' ? moonIcon : sunIcon} alt={theme} />
      <br />
      <a href="https://twitter.com/dogevax">
        <img src={twitter} alt="twitter" />
      </a>
    </Wrapper>
  );
};

export default ToggleTheme;
