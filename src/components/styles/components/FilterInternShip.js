import styled from 'styled-components';
import { fontPrimary } from '../variables';

export const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 20px 30px;
  flex: 2;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.21);
`;

export const Title = styled.h5`
  padding: 0px 0px;
  margin: 0;
  text-align: center;
  font-size: 20px;
  font-weight: normal;
  font-family: ${fontPrimary};
`;
