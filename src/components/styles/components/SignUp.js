import styled from 'styled-components';
import { fontPrimary, colorBlack } from '../variables';
import { Form as Formless } from './../global';

export const Title = styled.h1`
  text-align: center;
  font-family: ${fontPrimary};
  color: ${colorBlack};
  font-size: 50px;
  font-weight: 700;
`;

export const Form = styled(Formless)`
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  > input {
    padding: 12px 15px;
  }
`;

export const Error = styled.p`
  margin: 0;
  padding: 0;
  color: red;
`;
