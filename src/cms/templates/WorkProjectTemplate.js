import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Link } from 'gatsby';
import '../../scss/post.scss';
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage';

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
    const headerRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            headerRef.current &&
                headerRef.current.scrollIntoView({
                    behavior: 'auto',
                    block: 'end',
                });
        }, 50);
    }, []);
    return (
        <div className="workProject post">
            {helmet || ''}

            <article className="container">
                <header ref={headerRef}>
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

                    <div>
                        <PreviewCompatibleImage
                            imageInfo={{
                                image: featuredImage,
                            }}
                        />
                    </div>

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

export const WorkProjectPreview = ({ entry, widgetFor }) => {
    const tags = entry.getIn(['data', 'tags']);
    const tools = entry.getIn(['data', 'tools']);
    const linksEntry = entry.getIn(['data', 'links']);
    const links = linksEntry ? linksEntry.toJS() : [];
    return (
        <WorkProjectTemplate
            links={links}
            tools={tools && tools.toJS()}
            tags={tags && tags.toJS()}
            title={entry.getIn(['data', 'title'])}
            description={entry.getIn(['data', 'description'])}
        />
    );
};

