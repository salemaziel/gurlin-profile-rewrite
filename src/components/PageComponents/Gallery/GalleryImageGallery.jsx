import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from 'gatsby'
import ImageGallery from "react-image-gallery";

import galleryStyle from "./gallery.module.css";

import {
  Butterfly,
  Florence,
  ColorfulLake,
  ExploreNevada,
  GrandCanyon,
  GrandTetonLake,
  VeniceBalcony,
  GrandTeton,
  MountainsCalled,
  WaterColorsPreview,
  FloralComposition,
} from "./../../../images/index";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSelect: "0",
      sizeSelect: "0",
    };
  }
  handleSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const images = [
      {
        original: Butterfly,
      },
      {
        original: Florence,
      },
      {
        original: ColorfulLake,
      },
      {
        original: ExploreNevada,
      },
      {
        original: GrandCanyon,
      },
      {
        original: GrandTetonLake,
      },
      {
        original: VeniceBalcony,
      },
      {
        original: GrandTeton,
      },
      {
        original: MountainsCalled,
      },
    ];

const art = [
    {
      original: WaterColorsPreview
    },
    {
      original: FloralComposition
    },
];

    return (
      <section className={galleryStyle.GallerySection}>
        <Row>
          <Col>
          <Link rel="preload" to="/gallery/photogallery">
          <h3 style={{color:'#ff2852', textAlign: 'center'
        }}>My Photography Gallery</h3>
        </Link>
          </Col>
        </Row>
        <Container className={galleryStyle.GalleryContainer}>
          <Container className={galleryStyle.GalleryContainer}>

          <Row>
            <Col>
            <Link rel="preload" to="/gallery/photogallery">
              <ImageGallery
                showFullscreenButton={false}
                showPlayButton={false}
                startIndex={2}
                items={images}
                infinite={true}
                showNav={false}
                showThumbnails={false}
                showFullscreenButton={true}
                showBullets={true}
                showIndex={true}
              />
              </Link>
            </Col>
          </Row>
          </Container>
        </Container>
        <br />
        <br />
        <Row>
          <Col>
          <Link rel="preload" to="/gallery/artgallery">
          <h3 style={{color:'#ff2852', textAlign: 'center'
        }}>My Artwork</h3>
        </Link>
          </Col>
        </Row>

        <Container className={galleryStyle.GalleryContainer}>
          <Container className={galleryStyle.GalleryContainer}>

          <Row>
            <Col>
            <Link rel="preload" to="/gallery/artgallery">
              <ImageGallery
                showFullscreenButton={false}
                showPlayButton={false}
                startIndex={0}
                items={art}
                infinite={true}
                showNav={false}
                showThumbnails={false}
                showFullscreenButton={true}
                showBullets={true}
                showIndex={true}
              />
              </Link>
            </Col>
          </Row>
          </Container>
        </Container>
      </section>
    );
  }
}

export default Gallery;
