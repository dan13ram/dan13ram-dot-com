import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import { HTMLContent } from '../components/Content';
import { BlogPostTemplate } from '../cms/templates/BlogPostTemplate';

const BlogPost = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <BlogPostTemplate
            content={post.html}
            contentComponent={HTMLContent}
            description={post.frontmatter.description}
            helmet={
                <SEO
                    titleTemplate="%s | Blog"
                    title={post.frontmatter.title}
                    meta={[
                        {
                            name: 'description',
                            content: post.frontmatter.description,
                        },
                    ]}
                />
            }
            tags={post.frontmatter.tags}
            title={post.frontmatter.title}
        />
    );
};

export default BlogPost;

export const pageQuery = graphql`
    query BlogPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                tags
            }
        }
    }
`;
