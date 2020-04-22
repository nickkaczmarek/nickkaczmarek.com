import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { css } from "@emotion/core";
import styled from "@emotion/styled";

const padAnchor = css`
  a {
    padding-right: 0.5rem;
    color: black;
    &:hover {
      color: blue;
    }
  }
`;
const StyledNav = styled.nav`
  display: flex;
  ${padAnchor};
`;

const RightNav = styled.nav`
  display: flex;
  margin-left: auto;
  ${padAnchor};
`;

const StyledHeader = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  padding: 1rem;
  font-family: sans-serif;
  color: white;
`;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
`;

const StyledAnchor = styled.a`
  font-size: 1.5rem;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledNav>
      <StyledLink to={"/"}>{siteTitle}</StyledLink>
      <RightNav>
        <StyledAnchor href={"rss.xml"}>rss</StyledAnchor>
      </RightNav>
    </StyledNav>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
