import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

import ArtGalleryPage from '../../components/PageComponents/Gallery/Artgallery/ArtGalleryPage'

const ArtGallery = () => (
  <Layout>
    <SEO title="ArtGallery" />
    <ArtGalleryPage />

  </Layout>
);

export default ArtGallery;
