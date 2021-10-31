import React from "react";
import styled from "styled-components";
import bg from "../assets/img/bg.svg";
import HeaderContent from "../components/HeaderContent";
import Navigation from "../components/Navigation";

const Header = () => {
  return (
    <HeaderStyled id='header'>
      <div className="header-content">
        <Navigation />
        <HeaderContent />
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`

  min-height: 100vh;
  width: 100%;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 100%;
  .header-content {
    padding: 0 10rem;

    @media screen and (max-width: 1347px) {
      padding: 5rem 14rem;
    }
    @media screen and (max-width: 1186px) {
      padding: 5rem 8rem;
    }
    @media screen and (max-width: 990px) {
      padding: 5rem 4rem;
    }
  }
`;

export default Header;
