import React from "react"
import { graphql } from "gatsby"
import Plyr from "plyr-react"
import "plyr-react/dist/plyr.css"
import { Carousel } from "react-bootstrap"

import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const isBrowser = typeof window !== "undefined"

  const videoSrc = {
    type: "video",
    sources: [
      {
        src: data.strapiHomePage.vimeoId,
        provider: "vimeo",
      },
    ],
  }

  return (
    <Layout>
      <div className="container">
        <div className="home-video mb-80">
          {isBrowser && <Plyr source={videoSrc} />}
        </div>
        <Carousel fade indicators={false}>
          {data.strapiHomePage.photos.map((item, i) => {
            return (
              <Carousel.Item key={i}>
                <img src={item.localFile.url} alt=""></img>
              </Carousel.Item>
            )
          })}
        </Carousel>
        <div className="fx-center-between mt-60">
          <div className="social-link">
            <a
              href="https://it.linkedin.com/in/edoardo-marcuzzi-46a347200"
              target="_blank"
              rel="noreferrer"
              className="social-item"
              title="Link open a new page on my linkedin account"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://vimeo.com/user107581401"
              target="_blank"
              rel="noreferrer"
              className="social-item"
              title="Link open a new page on my vimeo account"
            >
              <i className="bi bi-vimeo"></i>
            </a>
            <a
              href="https://www.instagram.com/edomarcuz/?hl=it"
              target="_blank"
              rel="noreferrer"
              className="social-item"
              title="Link open a new page on my instagram account"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="tel:+393492879150"
              className="social-item"
              title="Call me at the number 3492879150"
            >
              <i className="bi bi-telephone"></i>
            </a>
          </div>
          <a
            href={data.strapiHomePage.curriculum.url}
            download
            target="_blank"
            className="download-btn"
            rel="noreferrer"
          >
            <span className="btn-text">Download my CV</span>
            <i className="bi bi-file-earmark-pdf"></i>
          </a>
        </div>
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
