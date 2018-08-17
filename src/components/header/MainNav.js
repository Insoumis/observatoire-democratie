import React from "react";
import styled from "styled-components";

import { colors } from "../../theme";
import logo from "./assets/logo.svg";

const Container = styled.nav`
  background: ${colors.main};
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 10px 15px 15px;

  h1 {
    background: url(${logo}) no-repeat center;
    background-size: cover;
    height: 45px;
    text-indent: -9999px;
    width: 206px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;

    a {
      color: ${colors.white};
      display: inline-block;
      font-size: 1.2em;
      margin-left: 5px;
      padding: 10px;
    }
  }

  @media (max-width: 767px) {
    height: 50px;
    padding: 10px;

    h1 {
      height: 30px;
      width: 140px;
    }

    li a {
      padding: 5px 10px;
    }
  }
`;

const MainNav = () => {
  return (
    <Container>
      {/* <Link title="Accueil" to="/">
  <h1>Observatoire de la Démocratie</h1>
</Link> */}
      <a href="/">
        <h1>Observatoire de la Démocratie</h1>
      </a>
      <ul>
        <li>
          <a
            href="https://twitter.com/obs_democratie"
            title="Suivez-nous sur Twitter"
          >
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a
            href="mailto:contact@observatoire-democratie.fr"
            title="Contactez-nous par e-mail"
          >
            <i className="fas fa-envelope" />
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default MainNav;

// TODO: remettre le lien vers la home sur le logo avec le router
