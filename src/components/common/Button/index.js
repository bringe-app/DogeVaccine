import styled from 'styled-components';

export const Button = styled.button`
  font-size: 20px;
  font-family: 'Jost Medium';
  cursor: pointer;
  border-radius: 10px;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #edc531;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #edc531;
	`}
`;
