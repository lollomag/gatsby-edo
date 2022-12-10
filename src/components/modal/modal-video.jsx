import React from "react"
import ReactPlayer from "react-player/lazy"
import "plyr-react/dist/plyr.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { Modal } from "react-bootstrap"

const ModalVideo = ({ data, status, statusEvent }) => {
  const handleClose = () => statusEvent(false);

  return (
    <Modal className="modal fade modal-video" show={status}>
      <Modal.Header>
        <button onClick={handleClose} className="close" type="button" aria-label="close modal">
          <i className="bi bi-x-lg"></i>
        </button>
      </Modal.Header>
      {data && (
        <Modal.Body>
          <h3 className="title mb-50">{data.title}</h3>
          {data.testvimeoyt[0].vimeoId && (
            <ReactPlayer
              className="player"
              url={
                `https://player.vimeo.com/video/` + data.testvimeoyt[0].vimeoId
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

          {data.credits && (
            <div
              className="mt-50"
              dangerouslySetInnerHTML={{ __html: data.credits }}
            ></div>
          )}
        </Modal.Body>
      )}
    </Modal>
    // <div
    //   className="modal fade modal-video"
    //   id="modal-video"
    //   tabIndex="-1"
    //   aria-labelledby="exampleModalLabel"
    //   aria-hidden="true"
    // >
    //   <div className="modal-dialog">
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <button
    //           type="button"
    //           className="close"
    //           data-bs-dismiss="modal"
    //           aria-label="Close"
    //         >
    //           <span className="icon material-icons-outlined">close</span>
    //         </button>
    //       </div>
    //       {data && (
    //         <div className="modal-body">
    //           <h3 className="title mb-50">{data.title}</h3>
    //           {data.testvimeoyt[0].vimeoId && (
    //             <ReactPlayer
    //               className="player"
    //               url={
    //                 `https://player.vimeo.com/video/` +
    //                 data.testvimeoyt[0].vimeoId
    //               }
    //               controls
    //               width="100%"
    //               height="100%"
    //             />
    //           )}

    //           {data.testvimeoyt[0].link && (
    //             <ReactPlayer
    //               className="player"
    //               url={data.testvimeoyt[0].link}
    //               controls
    //               width="100%"
    //               height="100%"
    //             />
    //           )}

    //           {data.credits && <div className="mt-50" dangerouslySetInnerHTML={{ __html: data.credits }}></div>}
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
  )
}

export default ModalVideo
