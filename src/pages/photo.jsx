import React from "react"
import { graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout"

const PhotoPage = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <div className="container">
      <div class="gallery-wrapper">
        <div class="section-title">Photography</div>
        <div class="filter-wrapper photo">

        </div>
        {data.allStrapiPhoto.edges.map((item, i) => {
            return <div key={i}>
              <img src={item.node.image.url} alt=""></img>
            </div>
          })}
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
