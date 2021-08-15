import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";

import "../styles/index.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <header>
          <nav className="nav-outer-container">
            <Link to={"/"}>{data.site.siteMetadata.title}</Link>
            <nav className="nav-inner-container">
              <Link to={"/archive"}>{"archive"}</Link>
              <a href={"rss.xml"}>rss</a>
            </nav>
          </nav>
        </header>
        <main>{children}</main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
