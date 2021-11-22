import React from "react"
import { graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import Layout from "../components/layout"

const PhotoPage = ({ data }) => {
  console.log(data);

  const galleryOptions = {
    shareEl: false,
  }

  return (
    <Layout>
      <div className="container">
        <div class="gallery-wrapper">
          <div class="section-title">Photography</div>
          <div class="filter-wrapper photo">

          </div>
          <Gallery options={galleryOptions}>
            <div className="row photoswipe-gallery">
              {data.allStrapiPhoto.edges.map((item, i) => {
                return <div className="col-md-4" key={i}>
                  {/* <img src={item.node.image.url} alt=""></img> */}
                  <Item
                    original={item.node.image.url}
                    thumbnail={item.node.image.url}
                    width="80%"
                    height="768"
                  >
                    {({ ref, open }) => (
                      <img ref={ref} onClick={open} src={item.node.image.url} />
                    )}
                  </Item>
                </div>
              })}
            </div>
          </Gallery>
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
