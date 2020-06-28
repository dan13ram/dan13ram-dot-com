import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import '../scss/post.scss';

export const WorkProjectTemplate = ({
    title,
    description,
    featuredImage,
    helmet,
    points,
    tags,
    tools,
    links,
}) => {
    return (
        <div className="workProject post">
            {helmet || ''}

            <article className="container">
                <header>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </header>

                <section className="content">
                    {tools && tools.length ? (
                        <div>
                            <h4>Details</h4>
                            <ul className="toollist">
                                {points.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ) : null}

                    {links && links.length ? (
                        <div>
                            <h4>Links</h4>
                            <ul className="toollist">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        {`${link.label} - `}
                                        <a href={link.url}>{link.url}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : null}

                    {tools && tools.length ? (
                        <div>
                            <h4>Tools Used</h4>
                            <ul className="toollist">
                                {tools.map((tool, index) => (
                                    <li key={index}>{tool}</li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                </section>
            </article>
            <footer>
                {tags && tags.length ? (
                    <div>
                        <h4>Tags</h4>
                        <ul className="taglist">
                            {tags.map(tag => (
                                <li key={tag + `tag`}>
                                    <Link to={`/tags/${kebabCase(tag)}/`}>
                                        {tag}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </footer>
        </div>
    );
};

WorkProjectTemplate.propTypes = {
    tags: PropTypes.array,
    tools: PropTypes.array,
    points: PropTypes.array,
    links: PropTypes.array,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
};

const WorkProject = ({ data }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const {
        markdownRemark: {
            frontmatter: { title, description, tags, tools, links, points, featuredImage },
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

WorkProject.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
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
                        fluid(maxWidth: 500, quality: 100) {
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
