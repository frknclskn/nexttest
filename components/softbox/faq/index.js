import React from "react";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <section className="overview-block-ptb white-bg iq-asked">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="heading-title">
                  <h3 className="title iq-tw-7">Frequently Asked Questions</h3>
                  {/* <p>
                    Here you can find solution to your questions or queries.
                  </p> */}
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-6">
                <img
                  className="img-fluid center-block"
                  src="/assets/images/monitor.png"
                  alt="drive10"
                  style={{ zIndex: 9, position: "relative" }}
                />
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="iq-accordion">
                  <div className="iq-accordion accordion-active">
                    <a
                      href="#"
                      className="accordion-title iq-tw-7 iq-font-grey"
                    >
                      Does RAD-X provide integration with other systems ?
                    </a>
                    <div className="accordion-details">
                      <div className="row">
                        <div className="col-sm-3">
                          <img
                            alt="#"
                            className="img-fluid"
                            src="/assets/images/question1.png"
                          />
                        </div>
                        <div className="col-sm-9">
                          {" "}
                          Yes. RAD-X is fully compatible with IHE compatible
                          systems and supports multiple source and destination
                          combinations. HL7, DICOM and KOS transactions can be
                          monitored and managed through the Admin Panel.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-accordion">
                    <a
                      href="#"
                      className="accordion-title iq-tw-7 iq-font-grey"
                    >
                      Can RAD-X be used as a Hospital Information System ?
                    </a>
                    <div className="accordion-details">
                      {" "}
                      No. RAD-X is a flexible archiving, image analysis and
                      reporting system developed exclusively to meet workflow
                      needs of departments such as radiology, pathology and
                      cardiology.
                    </div>
                  </div>
                  <div className="iq-accordion">
                    <a
                      href="#"
                      className="accordion-title iq-tw-7 iq-font-grey"
                    >
                      Is the RAD-X compatible with mobile devices ?
                    </a>
                    <div className="accordion-details">
                      <div className="row">
                        <div className="col-sm-9">
                          {" "}
                          Yes. Thanks to its responsive interface design, RAD-X
                          is 100% compatible with mobile devices.
                        </div>
                        <div className="col-sm-3">
                          <img
                            alt="#"
                            className="img-fluid"
                            src={"/assets/images/question3.png"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="iq-objects-asked">
            <span className="iq-objects-01">
              <img src={"/assets/images/drive/02.png"} alt="drive02" />
            </span>
            <span
              className="iq-objects-02"
              data-bottom="transform:translatex(50px)"
              data-top="transform:translatex(-100px);"
            >
              <img src={"/assets/images/drive/04.png"} alt="drive02" />
            </span>
            <span className="iq-objects-03 iq-fadebounce">
              <span className="iq-round" />
            </span>
          </div>
        </section>
      </>
    );
  }
}

export default Index;
