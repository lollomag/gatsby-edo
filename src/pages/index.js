import * as React from "react"
import { Link, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import Plyr from 'plyr';

import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <div className="container">
        <div className="home-video mb-80">
          {/* <div id="player" data-plyr-provider="vimeo" data-plyr-embed-id="529441048"></div> */}
        </div>
        <div className="bio-carousel"></div>
        <div className="fx-center-between mt-60">
          <div className="social-link">
            <a href="https://it.linkedin.com/in/edoardo-marcuzzi-46a347200" target="_blank" rel="noreferrer" className="social-item" title="Link open a new page on my linkedin account"><span
              className="icn-linkedin"></span></a>
            <a href="https://vimeo.com/user107581401" target="_blank" rel="noreferrer" className="social-item" title="Link open a new page on my vimeo account"><span
              className="icn-vimeo"></span></a>
            <a href="https://www.instagram.com/edomarcuz/?hl=it" target="_blank" rel="noreferrer" className="social-item" title="Link open a new page on my instagram account"><span
              className="icn-instagram"></span></a>
            <a href="tel:+393492879150" className="social-item" title="Call me at the number 3492879150"><span className="icn-phone"></span></a>
          </div>
          <a download="CV-edoardo-marcuzzi" target="_blank" href={data.strapiHomePage.curriculum.url} className="download-btn" rel="noreferrer">
            <span className="btn-text">Download my CV</span>
            <span className="material-icons-outlined">file_download</span>
          </a>
        </div>
      </div>
      <p className="vimeo">{data.strapiHomePage.vimeoId}</p>
      {data.strapiHomePage.photos.map((item, i) => {
        return <img key={i} src={item.localFile.url} alt="test" />
      })}

      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
      </p>
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
