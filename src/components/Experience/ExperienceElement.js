import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  background: #000;
  align-items: center;
  height: 800px;
  position: relative;
  flex-direction: column;
  z-index: 1;
`;

export const Carddiv = styled.div`
  display: flex;
  background: #000;
  align-items: center;
`;

export const ProjectHeader = styled.h1`
  text-align: center;
  position: absolute;
  top: 100px;
  color: #fff;
  font-size: 50px;

  @media screen and (max-width: 760px) {
    font-size: 35px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;
