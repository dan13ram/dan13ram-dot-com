import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import { WorkProjectTemplate } from '../cms/templates/WorkProjectTemplate';

const WorkProject = ({ data }) => {
    const {
        markdownRemark: {
            frontmatter: {
                title,
                description,
                tags,
                tools,
                links,
                points,
                featuredImage,
            },
        },
    } = data;
    return (
        <WorkProjectTemplate
            title={title}
            description={description}
            featuredImage={featuredImage}
            helmet={
                <SEO
                    titleTemplate="%s | Work"
                    title={title}
                    meta={[
                        {
                            name: 'description',
                            content: description,
                        },
                    ]}
                />
            }
            tags={tags}
            tools={tools}
            points={points}
            links={links}
        />
    );
};

export default WorkProject;

export const pageQuery = graphql`
    query WorkProjectByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                tags
                tools
                featuredImage {
                    childImageSharp {
                        fluid(maxWidth: 2000, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                points
                links {
                    url
                    label
                    icon
                }
            }
        }
    }
`;
