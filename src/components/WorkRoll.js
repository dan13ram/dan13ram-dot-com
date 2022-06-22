import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import '../scss/workRoll.scss';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-ant-design/github-filled';
import gitlabIcon from '@iconify/icons-ant-design/gitlab-filled';
import eyeIcon from '@iconify/icons-ant-design/eye-outlined';

class WorkRoll extends React.Component {
    render() {
        const { data } = this.props;
        console.log(data);
        const { edges: posts } = data.allMarkdownRemark;
        const getIcon = (icon) => {
            switch (icon) {
                case 'view':
                    return eyeIcon;
                case 'github':
                    return githubIcon;
                case 'gitlab':
                    return gitlabIcon;
                default:
                    return null;
            }
        };

        return (
            <div className="workRoll roll">
                {posts &&
                    posts.map(({ node: post }) => (
                        <article key={post.id} className="workItem">
                            <div className="workImage">
                                <img
                                    src={
                                        post.frontmatter.featuredImage
                                            .childImageSharp.fluid.src
                                    }
                                    alt={post.frontmatter.title + ' image'}
                                />
                            </div>
                            <div className="workItemInner">
                                <div className="workHeaderContainer">
                                    <div className="workHeader">
                                        <span className="workTitle">
                                            {post.frontmatter.title}
                                        </span>
                                        <span className="workDescription">
                                            {post.frontmatter.description}
                                        </span>
                                    </div>
                                    <div className="workLinks">
                                        {post.frontmatter.links
                                            .filter(
                                                (link) =>
                                                    link.label === 'code' ||
                                                    link.label === 'live demo'
                                            )
                                            .map((link) => (
                                                <div
                                                    className="linkItem"
                                                    key={link.url + `link`}
                                                >
                                                    <a
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Icon
                                                            className="linkIcon"
                                                            icon={getIcon(
                                                                link.icon
                                                            )}
                                                        />
                                                        <span className="linkText">
                                                            {link.label}
                                                        </span>
                                                    </a>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                                <div className="workContent">
                                    <ul className="workPoints">
                                        {post.frontmatter.points.map(
                                            (point, index) => (
                                                <li
                                                    className="pointItem"
                                                    key={index}
                                                >
                                                    {point}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <div className="workTools">
                                        {post.frontmatter.tools.map((tool) => (
                                            <div
                                                className="toolItem"
                                                key={tool + `tool`}
                                            >
                                                {tool}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="viewMore">
                                    <Link
                                        className="viewLink"
                                        to={post.fields.slug}
                                    >
                                        view more {'\u276F'}
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
            </div>
        );
    }
}

WorkRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
};

export default () => (
    <StaticQuery
        query={graphql`
            query WorkRollQuery {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                    filter: {
                        frontmatter: { templateKey: { eq: "work-project" } }
                    }
                ) {
                    edges {
                        node {
                            excerpt(pruneLength: 400)
                            id
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                description
                                templateKey
                                date(formatString: "MMMM DD, YYYY")
                                featuredItem
                                featuredImage {
                                    childImageSharp {
                                        fluid(maxWidth: 1200, quality: 100) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                points
                                tools
                                links {
                                    url
                                    label
                                    icon
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => <WorkRoll data={data} count={count} />}
    />
);
