import CMS from 'netlify-cms-app';
// import uploadcare from 'netlify-cms-media-library-uploadcare';
// import cloudinary from 'netlify-cms-media-library-cloudinary';

import BlogPostPreview from './preview-templates/BlogPostPreview';
import ArtCollectionPreview from './preview-templates/ArtCollectionPreview';
import WorkProjectPreview from "./preview-templates/WorkProjectPreview";
import AboutPagePreview from './preview-templates/AboutPagePreview';

// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('art', ArtCollectionPreview);
CMS.registerPreviewTemplate("work", WorkProjectPreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);

CMS.init();
