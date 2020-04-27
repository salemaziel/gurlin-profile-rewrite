import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

import PhotoGalleryPage from '../../components/PageComponents/Gallery/Photogallery/PhotoGalleryPage'

const PhotoGallery = () => (
  <Layout>
    <SEO title="PhotoGallery" />
    <PhotoGalleryPage />

  </Layout>
);

export default PhotoGallery;
