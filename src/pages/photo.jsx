import React from "react"
import { graphql } from "gatsby"

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


import Layout from "../components/layout"

const PhotoPage = ({ data }) => {
  console.log(data);
  const onInit = () => {
    console.log('lightGallery has been initialized');
};
  return (
    <Layout>
      <div className="container">
        <div className="gallery-wrapper">
          <div className="section-title">Photography</div>
          <div className="filter-wrapper photo">

          </div>
          <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]} elementClassNames="row custom-gallery">
            {data.allStrapiPhoto.edges.map((item, i) => {
              return <a data-lg-size="1406-1390" className="gallery-item col-md-4" data-src={item.node.image.url}>
                  <img className="img-responsive" src={item.node.image.url} />
                </a>
            })}
          </LightGallery>
          
        </div>
      </div>
    </Layout>
  )
}

export default PhotoPage

export const pageQuery = graphql`
  query myQueryAndMyQuery {
    allStrapiPhoto {
      edges {
        node {
          image {
            url
          }
        }
      }
    }
  }
`
