import React from "react";

import {
  SectionStyle1,
  SectionStyle2,
  SectionTitle,
  CardStyle5,
} from "./";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="carousel-bg-color">
        <div className="carousel-advanced heading-title advanced">
          <h3 className="iq-tw-7 iq-mb-25 title" id="AdvancedImage">
            Advanced Image Prossesing Tools
          </h3>
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide advanced-img"
          data-ride="carousel"
          data-interval="false"
        >
          {/*<ol className="carousel-indicators crs-indicators">*/}
          {/*  <li*/}
          {/*    data-target="#carouselExampleIndicators"*/}
          {/*    data-slide-to="0"*/}
          {/*    className="active"*/}
          {/*  ></li>*/}
          {/*  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>*/}
          {/*  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>*/}
          {/*  <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>*/}
          {/*  <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>*/}
          {/*  <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>*/}
          {/*  <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>*/}
          {/*</ol>*/}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/assets/images/mamoyeni.jpeg"
                className="d-block carousel-img-adv"
                alt="..."
              />
              <h3 className="mt-5">MAMMOGRAPHY</h3>
              <p className="col-lg-6 carousel-text">
                RAD-X Mammograhy module is developed in accordance with the
                requirements of the IHE Mammography profile. It provides
                advanced hanging protocols supporting multiple monitors. Thanks
                to highly optimized image processing algorithms, very high
                resolution images can be processed at very high speed without
                any loss of information. Tomosynthesis images can be played back
                in Cine mode at up to 30 frames per second. CAD result reports
                produced by 3rd party artificial intelligence CAD applications
                are retrieved in DICOM SR (Structured Report) format and
                presented to the user. The mammography module makes the
                reporting of mammography images faster and safer with many
                features such as mammography-specific synchronization, scaling,
                and automatic detection of breast area.
              </p>
            </div>
            <div className="carousel-item">
              <img
                src="/assets/images/3dmpr.jpeg"
                className="d-block carousel-img-adv "
                alt="..."
              />
              <h3 className="mt-5">3D MODULE</h3>
              <p className="col-lg-6  carousel-text">
                VRT, MIP, SSD techniques can easily be applied to 3D CT, PET and
                MRI slices. Free Hand Cut and auto grow functions allow users to
                remove non relevant parts from the volume. With stretched and
                projected Curved MPR techniques coronary and spinal examinations
                can be performed easier. AI masks can easily be applied to 3D
                images for automatic segmentation of regions.
              </p>
            </div>
            <div className="carousel-item">
              <img
                src="/assets/images/lung.jpeg"
                className="d-block carousel-img-adv "
                alt="..."
              />
              <h3 className="mt-5">LUNG SEGMENTATION</h3>
              <p className="col-lg-6  carousel-text">
                With the help of Artificial Intelligence (AI), it provides rapid
                and highly accurate measurement of lung volume and nodules in
                axial CT images. Right and left lung analysis can be performed.
                Nodules can be tracked in a retrospective manner by means of
                temporal volume change and histogram analysis.
              </p>
            </div>
            <div className="carousel-item">
              <img
                src="/assets/images/liver_analysis_segmentation.png"
                className="d-block carousel-img-adv"
                alt="..."
              />
              <h3 className="mt-5">LIVER SEGMENTATION</h3>
              <p className="col-lg-6 carousel-text">
                Liver segmentation tool enables automated and highly accurate
                measurement of the volume of 8 different lobes of the liver in
                axial CT images.
              </p>
            </div>
            <div className="carousel-item">
              <img
                src="/assets/images/heart_segmentation.png"
                className="d-block carousel-img-adv"
                alt="..."
              />
              <h3 className="mt-5">HEART SEGMENTATION</h3>
              <p className="col-lg-6  carousel-text">
                Heart segmentation tool enables automatic segmentation of heart
                in axial CT images. Segmented images can be used to generate 3D
                volumetric images of heart without need for manual clipping
                tools.
              </p>
            </div>
            <div className="carousel-item">
              <img
                src="/assets/images/pathology.jpeg"
                className="d-block carousel-img-adv "
                alt="..."
              />
              <h3 className="mt-5"> DIGITAL PATHOLOGY</h3>
              <p className="col-lg-6  carousel-text">
                RAD-X provides the ability to store and view digital pathology
                images that have very high resolution (>100.000 Megapixel).
                Based on Deep Zoom technology, digital pathology slides can be
                examined very efficiently even on slow networks. Pathologists
                can measure and mark areas of interest. Statistics on count and
                percentiles of various markers within a certain area can
                automatically be calculated. Pathologists can also benefit from
                advanced reporting capabilities. Pathology images of patients
                can be viewed side by side with radiology images and reports
                which enables a multidisciplinary working environment.
              </p>
            </div>
            <div className="carousel-item">
              <img
                src="/assets/images/structuredReport.png"
                className="d-block carousel-img-adv "
                alt="..."
              />
              <h3 className="mt-5">STRUCTURED REPORTING</h3>
              <p className="col-lg-6 carousel-text">
                For fields such as cardiology, urology, pathology and
                mammography RAD-X offers fully customizable structured reports
                for fast and easy reporting.
              </p>
            </div>
          </div>
          <button
            className="carousel-control-prev "
            type="button"
            data-target="#carouselExampleIndicators"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon control-carousel"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next "
            type="button"
            data-target="#carouselExampleIndicators"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon control-carousel"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    );
  }
}
export default Index;
