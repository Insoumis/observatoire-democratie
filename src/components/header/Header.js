import React from "react";
import styled from "styled-components";

import MainNav from "./MainNav";
import SubNav from "./SubNav";
import banner from "./assets/banner.png";

const Container = styled.div`
  @media (max-width: 767px) {
    font-size: 0.9em;
  }
`;

const Banner = styled.header`
  background: #89d6ec;
  height: ${props => (props.home ? "250px" : "130px")};
  overflow: hidden;

  div {
    background: url(${banner}) no-repeat center;
    background-size: auto 100%;
    height: 100%;
    width: 100%;
    ${props => !props.home && "transform: scale(1.2);"};
  }

  @media (max-width: 767px) {
    height: ${props => (props.home ? "138px" : "100px")};
  }
`;

const Header = () => {
  return (
    <Container>
      <MainNav />
      <Banner home={true}>
        <div />
      </Banner>
      <SubNav />
    </Container>
  );
};

export default Header;

// TODO: Animation de la bannière quand on quitte la home
