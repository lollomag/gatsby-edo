import React from "react"
import { graphql } from "gatsby"
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const isBrowser = typeof window !== "undefined"
  
  const videoSrc = {
    type: "video",
    sources: [
      {
        src: data.strapiHomePage.vimeoId,
        provider: "vimeo"
      }
    ]
  };

  return (
    <Layout>
      <div className="container">
        <div className="home-video mb-80">
          {isBrowser && <Plyr source={videoSrc} />}
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
