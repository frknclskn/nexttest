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
        <SectionStyle1 id={"what_can_do1"} rowReverse={true}>
          <div className="col-lg-6 align-self-center" id="Medex">
            <img
              className="iq-works-img pull-right img-fluid"
              src="/assets/images/medex.png"
              alt="drive01"
            />
          </div>
          <div className="col-lg-6">
            <div className="heading-title left text-left">
              <h3 className="iq-tw-7 iq-mb-25 title">
                Connect With 100s Of Experts Worldwide via Medex
              </h3>
            </div>
            <div className="iq-mt-40 iq-list">
              <span className="iq-font-black">
                MEDEX is a question and answer site for radiologists and
                residents. Includes questions and answers about various radiological cases.
              </span>
            </div>
          </div>
        </SectionStyle1>
      </>
    );
  }
}

export default Index;
