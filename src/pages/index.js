import React from "react";
import { Link, graphql } from "gatsby";

import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";

import Layout from "../components/layout.js";
import SEO from "../components/seo";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`Nick Kaczmarek`, `nickkaczmarek.com homepage`]} />
    <div>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <div dangerouslySetInnerHTML={{ __html: node.html }}></div>
            {data.allMarkdownRemark.edges.length - 1 !== index ? <hr /> : null}
          </Link>
        </div>
      ))}
    </div>
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          html
        }
      }
    }
  }
`;

export default IndexPage;
