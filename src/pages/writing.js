import React from "react";

import { graphql, Link } from "gatsby";
import { Layout, SEO, Section } from "../components/common";
import BlogPostCard from "../components/BlogPostCard";

function WritingPage({ data }) {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Books"
      />
      <Section>
        <h1>What I'm Writing</h1>
        <p className="measure">
          My personal blog. What to expect: Random topics and personal thoughts.
          Let me know what you think!
        </p>
      </Section>

      <Section>
        <div className="flex flex-wrap -mx-2">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title;
            const timeToRead = node.timeToRead;
            const subtitle = node.frontmatter.subtitle;
            const slug = node.fields.slug;

            return (
              <BlogPostCard
                title={title}
                subtitle={subtitle}
                timeToRead={timeToRead}
                slug={slug}
              />
            );
          })}
        </div>
      </Section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            subtitle
          }
          timeToRead
        }
      }
    }
  }
`;

export default WritingPage;
