import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { colors } from "../../theme";

const Container = styled.nav`
  background: ${colors.white};
  border-bottom: 1px solid ${colors.border};
  font-size: 1.1em;
  padding: 16px 0;

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  li {
    display: inline-block;
    font-size: 0.9em;
    margin: 0 15px;
  }

  a {
    text-decoration: none;

    i {
      transition: color 0.2s;
    }

    &.active,
    :hover {
      color: ${colors.main};

      i {
        color: ${colors.lighter};
      }
    }
  }
`;

const SubNav = () => {
  return (
    <Container>
      <ul>
        <li>
          <NavLink exact to="/">
            <i className="fa fa-home fa-fw" aria-hidden="true" /> Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/test">
            <i className="fa fa-home fa-fw" aria-hidden="true" /> Test
          </NavLink>
        </li>
      </ul>
    </Container>
  );
};

export default SubNav;
