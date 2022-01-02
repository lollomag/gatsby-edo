import React from "react"
import { graphql } from "gatsby"
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import { useState } from "react";

const CinemaPage = ({ data }) => {
  const isBrowser = typeof window !== "undefined"
  const [videoList, setVideoList] = useState(data.allStrapiCinemaVideos.nodes)
  
  const videoSrc = {
    type: "video",
    sources: [
      {
        src: '529441048',
        provider: "vimeo"
      }
    ]
  };

  function removeSpaces(string) {
    return string.replace(/\s+/g, '')
  }

  function filterVideos(filter) {
    const newList = videoList.filter(item => item.filter_video.filter_name === filter);
    setVideoList(newList);
  }
  
  return (
    <Layout>
      <div className="container">
        <h2 className="section-title">Cinematography</h2>
        <div className="main-video-cinema">
          <div className="row">
            <div className="col-12 col-md-6">
              {isBrowser && <Plyr source={videoSrc} />}
            </div>
            <div className="col-12 col-md-6">
              <h2 className="title">titolo</h2>
              <p className="description">descrizione lorem ipsum</p>
            </div>
          </div>
        </div>
        <div className="filter-wrapper video">
          {data.allStrapiFilterVideos.nodes.map(filter => (
            <div key={filter.filter_name} className="filter-item" onClick={() => filterVideos(filter.filter_name)} data-filter={removeSpaces(filter.filter_name)}>{filter.filter_name}</div>
          ))}
        </div>
        <div className="row mt-30" id="modal-videos">
          {videoList.map(video => (
            <React.Fragment key={video.title}>
            <div className="col-12 col-md-4 mt-30" data-filter={removeSpaces(video.filter_video.filter_name)}>
              <div className="simple-video">
                <a data-toggle="modal" data-target="#modal-video" data-id={video.id} className="preview">
                  <img src={video.cover.url} alt="" />
                  <span className="icon material-icons-outlined">play_circle_outline</span>
                </a>
                <h2 className="title">{video.title}</h2>
              </div> 
            </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default CinemaPage

export const pageQuery = graphql`
  query VideosQuery {
    allStrapiCinemaVideos {
      nodes {
        title
        credits
        id
        filter_video {
          filter_name
        }
        cover {
          url
        }
      }
    }
    allStrapiFilterVideos {
      nodes {
        filter_name
      }
    }
  }
`
