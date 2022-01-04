import React from "react"
import { graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout"

const AboutPage = ({ data }) => {
console.log(data);
function creaCodiceHtml() {
  return {__html: data.strapiAbout.biography};
}

  return (
    <Layout>
      <div className="container">
        <div className="bio-home" dangerouslySetInnerHTML={creaCodiceHtml()}></div>
        <div className="other-image">
          {data.strapiAbout.photos.map(image => (
            <img key={image.url} src={image.url} alt=""></img>
          ))}
        </div>
        <div className="row mt-40 fx-center">
					<div className="col-12 col-md-8">
						<h2 className="follow-title t-bold text-center">Contact me for collaborations</h2>
						<form id="info-form" data-parsley-validate="">
							<div className="row mt-10">
								<div className="col-12 col-md-6 mt-20">
									<div className="input-wrapper">
										<input type="text" id="name" placeholder="Name" required />
									</div>
								</div>
								<div className="col-12 col-md-6 mt-20">
									<div className="input-wrapper">
										<input type="email" id="email" placeholder="Email" required data-parsley-type="email" />
									</div>
								</div>
								<div className="col-12 mt-20">
									<div className="input-wrapper">
										<input type="text" id="object" placeholder="Object" required data-parsley-minlength="5" />
									</div>
								</div>
								<div className="col-12 mt-20">
									<div className="input-wrapper">
										<textarea name="" id="message" cols="30" rows="10" placeholder="Message" required
											data-parsley-minlength="10"></textarea>
									</div>
								</div>
							</div>
						</form>
            <div className="fx-center mt-20">
							<button className="custom-btn send" id="form-send-button">
								<span>Send</span>
							</button>
						</div>
					</div>
				</div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutQuery {
    strapiAbout {
      biography
      photos {
        url
      }
    }
  }
`