import styled from 'styled-components';
import { fontPrimary, fontSecondary, colorBlack } from '../variables';
import { lighten } from 'polished';

export const Card = styled.div`
  border-radius: 5px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.21);
  width: 27%;
  padding: 10px 20px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  > h5 {
    font-family: ${fontSecondary};
    font-size: 20px;
    margin: 10px 0px 10px 0px;
    text-align: center;
    font-weight: bold;
    letter-spacing: -1px;
    color: rgba(0, 0, 0, 0.5);
  }
  > h6 {
    font-family: ${fontPrimary};
    font-size: 30px;
    font-weight: 700;
    margin: 0;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
  }
  > hr {
    border-color: rgba(0, 0, 0, 0.1);
    width: 70%;
  }
  > p {
    margin: 0;
    display: flex;
    justify-content: space-between;

    font-family: ${fontSecondary};
    font-size: 15px;
    color: ${lighten(0.3, colorBlack)};
  }
  &:hover {
    transform: translateY(-3px);
  }
`;
