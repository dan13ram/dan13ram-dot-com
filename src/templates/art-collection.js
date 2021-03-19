import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import { ArtCollectionTemplate } from '../cms/templates/ArtCollectionTemplate';

const ArtCollection = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <ArtCollectionTemplate
            content={post.frontmatter.content}
            description={post.frontmatter.description}
            helmet={
                <SEO
                    titleTemplate="%s | Art"
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

export default ArtCollection;

export const pageQuery = graphql`
    query ArtCollectionByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                tags
                content {
                    title
                    description
                    image {
                        childImageSharp {
                            fluid(maxWidth: 500, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;
