import styled from "styled-components";
import { Link } from "react-router-dom";

export const DivWrapper = styled.div`
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #373737;
`;

export const DivSelect = styled.div`
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: white;
`;

export const Select = styled.select`
  font-family: Montserrat;
  font-size: 20px;
  margin-left: 10px;
  padding: 2px 10px;
`;

export const SelectText = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: white;
`;

export const BackLink = styled(Link)`
  font-family: "Montserrat";
  align-items: center;
  background: #ebd8ff;
  border: 0;
  border-radius: 10.3108px;
  box-shadow: 0 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  color: #373737;
  cursor: pointer;
  display: flex;
  font-size: 18px;
  font-weight: 600;
  line-height: 21.94px;
  padding: 14px 46px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.4s cubic-bezier(0.5, 0, 0.3, 1);
  margin-bottom: 28px;
  &:hover,
  &:focus {
    transform: scale(1.07);
    background: #5cd3a8;
    transition: all 0.4s cubic-bezier(0.5, 0, 0.3, 1);
  }
`;
