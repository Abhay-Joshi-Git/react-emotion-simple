import React from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';

console.log('styled', styled);

const TextCenter = styled('div')`
  text-align: center;
  padding: 10px;

  ${'.my-p'} {
    color: blue
  }
`;

const TealDiv = styled('div')`
  background: ${props => props.primary ? 'teal' : 'blue'};
`;

const TealCenter = TealDiv.withComponent(TextCenter);

const TParagraph = css`
  color: turquoise;

  div {
    border-bottom: 1px solid currentColor;
  }
`

export default {
  TealCenter,
  TParagraph
}