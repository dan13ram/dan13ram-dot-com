import React, { useEffect, useRef } from 'react';
import { kebabCase } from 'lodash';
import { Link } from 'gatsby';
import Content from '../../components/Content';
import '../../scss/post.scss';

export const BlogPostTemplate = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    helmet,
}) => {
    const PostContent = contentComponent || Content;
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
        <div className="blogPost post">
            {helmet || ''}

            <article className="container">
                <header ref={headerRef}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </header>

                <PostContent content={content} className="content" />
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

export const BlogPostPreview = ({ entry, widgetFor }) => {
    const tags = entry.getIn(['data', 'tags']);
    return (
        <BlogPostTemplate
            content={widgetFor('body')}
            description={entry.getIn(['data', 'description'])}
            tags={tags && tags.toJS()}
            title={entry.getIn(['data', 'title'])}
        />
    );
};
