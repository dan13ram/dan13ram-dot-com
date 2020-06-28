import React from 'react';
import PropTypes from 'prop-types';
import { WorkProjectTemplate } from '../../templates/work-project';

const WorkProjectPreview = ({ entry, widgetFor }) => {
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

WorkProjectPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
};

export default WorkProjectPreview;
