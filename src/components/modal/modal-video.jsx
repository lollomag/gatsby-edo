import React from "react"
import ReactPlayer from "react-player/lazy"
import "plyr-react/dist/plyr.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

// import Layout from "../components/layout"

const ModalVideo = ({ data }) => {
  return (
    <div
      className="modal fade modal-video"
      id="modal-video"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span className="icon material-icons-outlined">close</span>
            </button>
          </div>
          {data && (
            <div className="modal-body">
              <h3 className="title mb-50">{data.title}</h3>
              {data.testvimeoyt[0].vimeoId && (
                <ReactPlayer
                  className="player"
                  url={
                    `https://player.vimeo.com/video/` +
                    data.testvimeoyt[0].vimeoId
                  }
                  controls
                  width="100%"
                  height="100%"
                />
              )}

              {data.testvimeoyt[0].link && (
                <ReactPlayer
                  className="player"
                  url={data.testvimeoyt[0].link}
                  controls
                  width="100%"
                  height="100%"
                />
              )}

              {data.credits && <div className="mt-50" dangerouslySetInnerHTML={{ __html: data.credits }}></div>}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ModalVideo
