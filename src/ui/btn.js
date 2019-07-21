import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BtnsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Btn = styled.button`
  box-sizing: border-box;
  display: block;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px 15px;
  background-color: #ffffff;
  border: 1px solid #00aa80;
  border-radius: 4px;
  font-size: 16px;
  font-weight: normal;
  color: #00aa80;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border 0.3s;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: #00aa80;
    color: #ffffff;
  }
`;

export const BtnLink = styled(Link)`
  box-sizing: border-box;
  display: block;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px 15px;
  background-color: #ffffff;
  border: 1px solid #00aa80;
  border-radius: 4px;
  font-size: 16px;
  font-weight: normal;
  color: #00aa80;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border 0.3s;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: #00aa80;
    color: #ffffff;
  }
`;
