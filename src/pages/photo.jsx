import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import Layout from "../components/layout"

const PhotoPage = ({ data }) => {
  const [galleryInstance, setGalleryInstance] = useState();
  const [photoList, setPhotoList] = useState(data.allStrapiPhoto.edges);
  const [activeFilter, setActiveFilter] = useState('')

  const filterList = (filter) => {
    const newList = data.allStrapiPhoto.edges.filter(item => item.node.filter_photo?.filterName === filter);
    if (filter === activeFilter) {
      setPhotoList(data.allStrapiPhoto.edges)
      setActiveFilter('')
    } else {
      setPhotoList(newList)
      setActiveFilter(filter)
    }
  }

  const onInit = (evt) => {
    setGalleryInstance(evt.instance)
  };

  useEffect(() => {
    galleryInstance?.refresh();
  }, [photoList, galleryInstance]);

  return (
    <Layout>
      <div className="container">
        <div className="gallery-wrapper">
          <div className="section-title">Photography</div>
          <div className="filter-wrapper photo">
            {data.allStrapiFilterPhotos.edges.map(item => {
              return <React.Fragment key={item.node.id}>
                {activeFilter === item.node.filterName ?
                  <button className="filter-item active" onClick={() => {filterList(item.node.filterName)}}>{item.node.filterName}</button>
                  :
                  <button className="filter-item" onClick={() => {filterList(item.node.filterName)}}>{item.node.filterName}</button>
                }
                </React.Fragment>
            })}
          </div>
          <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]} elementClassNames="row custom-gallery">
            {photoList.map(item => {
              return <React.Fragment key={item.node.image.id}>
                  <button data-lg-size="1406-1390" className="gallery-item col-md-4" data-src={item.node.image.url}>
                    <img className="img-responsive" src={item.node.image.url} alt=""/>
                  </button>
                </React.Fragment>
            })}
          </LightGallery>
          
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
            id
          }
          filter_photo {
            filterName
          }
        }
      }
    }
    allStrapiFilterPhotos {
      edges {
        node {
          filterName
          id
        }
      }
    }
  }
`
