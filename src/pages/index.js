import * as React from "react"
import { Link, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data);
  
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>{data.strapiHomePage.vimeoId}</p>
      {data.strapiHomePage.photos.map((item, i) => {
        return <img key={i} src={item.localFile.url} alt="test"/>
      })}
      
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
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
