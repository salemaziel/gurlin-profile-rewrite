import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import GalleryPage from '../components/PageComponents/Gallery/GalleryPage'

const Gallery = () => (
  <Layout>
    <SEO title="Gallery" />
    <GalleryPage />

  </Layout>
);

export default Gallery;
