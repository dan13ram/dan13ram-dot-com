import React from 'react';
import { graphql } from 'gatsby';
import BlogRoll from '../../components/BlogRoll';
import SEO from '../../components/SEO';
import '../../scss/page.scss';

const BlogPage = ({ data }) => (
    <div className="blogPage page">
        <SEO title={`Blog`} />
        <section className="content">
            <BlogRoll />
        </section>
    </div>
);
export default BlogPage;

export const blogPageQuery = graphql`
    query BlogQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
