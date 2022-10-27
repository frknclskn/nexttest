import React from "react";

const Index = (props) => {
  return (
    <>
      <div className="iq-works-box text-left display-flex-row what-is-radx-box">
        <div className="card-style-5-div1">
          <img src={props.media} className="img-fluid" alt="#" />
        </div>
        <div className="card-style-5-div2">
          <h5 className="iq-tw-7 iq-mt-25 iq-mb-15">{props.text}</h5>
        </div>
        {props.children}
      </div>
    </>
  );
};

export default Index;
