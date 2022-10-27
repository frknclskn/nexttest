import React from "react";

import {
  SectionStyle1,
  SectionStyle2,
  SectionTitle,
  CardStyle5,
} from "../";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <section id="how-it-works" className="overview-block-ptb it-works">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <SectionTitle
                  title="WHAT IS RAD-X ?"
                  subTitle="RAD-X is a modular system to meet all the needs of radiology departments in hospitals, from image 
                            archiving to workflow management."
                />
              </div>
              <div className="col-sm-12">
                <SectionTitle
                  title="4 REASONS TO CHOOSE RAD-X "
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-3" onClick={()=>{document.getElementById("thePerfectCombination").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})}}>
                <CardStyle5
                  text={
                    "The perfect combination of simplicity and functionality"
                  }
                  media={"/assets/images/icon1.png"}
                ></CardStyle5>
              </div>

              <div className="col-md-12 col-lg-3 r-mt-30" onClick={()=>{document.getElementById("AdvancedImage").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})}}>
                <CardStyle5
                  text={"Advanced image prossesing tools"}
                  media={"/assets/images/icon4.png"}
                ></CardStyle5>
              </div>

              <div className="col-md-12 col-lg-3 r-mt-30" onClick={()=>{document.getElementById("Medex").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})}}>
                <CardStyle5
                  text={"Connect with 100s of experts worldwide via MEDEX"}
                  media={"/assets/images/icon2.png"}
                ></CardStyle5>
              </div>


              <div className="col-md-12 col-lg-3 r-mt-30" onClick={()=>{document.getElementById("FullyCustomizable").scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})}}>
                <CardStyle5
                  text={"Fully customizable workflow engine"}
                  media={"/assets/images/icon3.png"}
                ></CardStyle5>
              </div>
            </div>
          </div>
        </section>

        <SectionStyle1 id={"what_can_do"} rowReverse={true}>
          <div className="col-lg-6 align-self-center">
            <img
              className="iq-works-img pull-right img-fluid"
              src="/assets/images/page2png.png"
              alt="drive01"
            />
          </div>
          <div className="col-lg-6">
            <div className="heading-title left text-left">
              <h3 className="iq-tw-7 iq-mb-25 title">WHAT CAN RAD-X DO ?</h3>
            </div>
            <ul className="iq-mt-40 iq-list">
              <li className="iq-tw-6 iq-mb-15">
                <i className="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30" />
                <span className="iq-font-black">
                  RAD-X provides archiving and reporting features for all types
                  modalities including radiology, cardiology, pathology,
                  oncology etc. With fully customizable workflow engine,
                  structured reporting and integration features, RADX can easily
                  adapt to your workflows.
                </span>
              </li>
              <li className="iq-tw-6 iq-mb-15">
                <i className="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30" />
                <span className="iq-font-black">
                  With personalized views, shortcuts, screen layouts and
                  customized worklist queries every user can personalize their
                  own app.
                </span>
              </li>
              <li className="iq-tw-6 iq-mb-15">
                <i className="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30" />
                <span className="iq-font-black">
                  RAD-X can easily be integrated with 3rd party AI applications.
                  Annotations and structured information can easily be retrieved
                  by means of DICOM Structured Reports.
                </span>
              </li>
              <li className="iq-tw-6 iq-mb-15">
                <i className="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30" />
                <span className="iq-font-black">
                  RAD-X enables researchers to develop their own AI models by
                  providing rich segmentation and classification tools. In house
                  developed models can easily be integrated into RAD-X engine
                  and can be applied on images with click of a button.
                </span>
              </li>
            </ul>
          </div>
        </SectionStyle1>
      </>
    );
  }
}

export default Index;
