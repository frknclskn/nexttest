import React from 'react';
import {SectionStyle2, SectionStyle1} from "../";


class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <SectionStyle2 ids="software-features" small={true}>
                    <div className="iq-software-demo" id="thePerfectCombination">
                        <img className="img-fluid" src="/assets/images/about1.png" alt="drive05" />
                    </div>
                    <div className="col-lg-6 offset-lg-6">
                        <div className="heading-title left text-left">
                            <h3 className="iq-tw-7 iq-mb-25 title">The Perfect Combination Of Simplicity And Functionality</h3>
                        </div>
                        <p>RAD-X is designed to achieve performance of a desktop application on a web browser. All DICOM images are transferred in lossless fashion to the clients. Thanks to state of art caching technology, switching between images is now faster than ever. In short, RAD-X provides all sophisticated functions and workflow management in a zero foot print web application.</p>
                    </div>
                    
                </SectionStyle2>
            </>
        );
    }

}

export default Index;