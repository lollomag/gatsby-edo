import React from "react"
import { graphql } from "gatsby"
// import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
// import Plyr from 'plyr';
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div className="container">
        <div className="home-video mb-80">
          {/* <div id="player" data-plyr-provider="vimeo" data-plyr-embed-id="529441048"></div> */}
        </div>
        <Carousel fade indicators={false}>
          {data.strapiHomePage.photos.map((item, i) => {
            return <Carousel.Item key={i}>
              <img src={item.localFile.url} alt=""></img>
            </Carousel.Item>
          })}
        </Carousel>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    strapiHomePage {
      curriculum {
        url
      }
      photos {
        localFile {
          url
        }
      }
      vimeoId
    }
  }
`
