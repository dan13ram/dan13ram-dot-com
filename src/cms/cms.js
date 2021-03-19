import CMS from 'netlify-cms-app';
// import uploadcare from 'netlify-cms-media-library-uploadcare';
// import cloudinary from 'netlify-cms-media-library-cloudinary';

import { BlogPostPreview } from './templates/BlogPostTemplate';
import { ArtCollectionPreview } from './templates/ArtCollectionTemplate';
import { WorkProjectPreview } from "./templates/WorkProjectTemplate";
import { AboutPagePreview } from './templates/AboutPageTemplate';

// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('art', ArtCollectionPreview);
CMS.registerPreviewTemplate("work", WorkProjectPreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);

CMS.init();
