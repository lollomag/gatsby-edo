import React, { useState } from "react"
import { graphql } from "gatsby"
// import Plyr from "plyr-react";
import ReactPlayer from "react-player"
import "plyr-react/dist/plyr.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

import Layout from "../components/layout"
import ModalVideo from "../components/modal/modal-video"

const CinemaPage = ({ data }) => {
  // const isBrowser = typeof window !== "undefined"
  const [videoList, setVideoList] = useState(data.allStrapiCinemaVideos.nodes)
  const [activefilter, setActiveFilter] = useState("")
  const [videoShown, setVideoShown] = useState();

  const mainVideoBanner = {
    vimeoId:
      "https://player.vimeo.com/video/" +
      data.allStrapiCinemaMainVideo.nodes[0].vimeoId,
    title: data.allStrapiCinemaMainVideo.nodes[0].title,
    description: data.allStrapiCinemaMainVideo.nodes.description,
  }

  console.log(data)

  function removeSpaces(string) {
    return string.replace(/\s+/g, "")
  }

  const filterVideos = filter => {
    const newList = data.allStrapiCinemaVideos.nodes.filter(
      item => item.filter_video.filter_name === filter
    )
    setActiveFilter(filter)
    setVideoList(newList)
  }

  const openModal = video => {
    console.log('lll', video);
    setVideoShown(video);
  }

  return (
    <>
      <Layout>
        <div className="container">
          <h2 className="section-title">Cinematography</h2>
          <div className="main-video-cinema">
            <div className="row">
              <div className="col-12 col-md-6">
                <ReactPlayer
                  className="player"
                  url={mainVideoBanner.vimeoId}
                  playing
                  controls
                  light
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="col-12 col-md-6">
                <h2 className="title">{mainVideoBanner.title}</h2>
                {mainVideoBanner.description && (
                  <p className="description">{mainVideoBanner.description}</p>
                )}
              </div>
            </div>
          </div>
          <div className="filter-wrapper video">
            {data.allStrapiFilterVideos.nodes.map(filter => (
              <button
                key={filter.filter_name}
                type="button"
                className={
                  activefilter === filter.filter_name
                    ? "filter-item active"
                    : "filter-item"
                }
                onClick={() => filterVideos(filter.filter_name)}
                data-filter={removeSpaces(filter.filter_name)}
              >
                {filter.filter_name}
              </button>
            ))}
          </div>
          <div className="row mt-30" id="modal-videos">
            {videoList.map(video => (
              <React.Fragment key={video.title}>
                <div className="col-12 col-md-4 mt-30">
                  <div className="simple-video">
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#modal-video"
                      data-id={video.id}
                      className="preview"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-video"
                      onClick={() => openModal(video)}
                    >
                      <img src={video.cover.url} alt="" />
                      <span className="icon material-icons-outlined">
                        play_circle_outline
                      </span>
                    </button>
                    <h2 className="title">{video.title}</h2>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </Layout>
      <ModalVideo data={videoShown}/>
    </>
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
        testvimeoyt
      }
    }
    allStrapiFilterVideos {
      nodes {
        filter_name
      }
    }
    allStrapiCinemaMainVideo {
      nodes {
        title
        vimeoId
      }
    }
  }
`
