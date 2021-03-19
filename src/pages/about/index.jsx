import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import { HTMLContent } from '../../components/Content';
import { AboutPageTemplate } from '../../cms/templates/AboutPageTemplate';

const AboutPage = ({ data }) => {
    const { markdownRemark } = data;
    return (
        <AboutPageTemplate
            contentComponent={HTMLContent}
            avatarImage={markdownRemark.frontmatter.avatarImage}
            title={markdownRemark.frontmatter.title}
            content={markdownRemark.html}
            helmet={<SEO title={`Me`} />}
        />
    );
};

export default AboutPage;

export const aboutQuery = graphql`
    query AboutPageQuery {
        markdownRemark(frontmatter: { pageKey: { eq: "about" } }) {
            html
            frontmatter {
                title
                avatarImage {
                    childImageSharp {
                        fluid(maxWidth: 500, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;
