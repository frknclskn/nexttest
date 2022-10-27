import React from 'react';
import { ParallaxHeroStyle1 } from '../';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <ParallaxHeroStyle1
                    ids="iq-home"
                    bgImage={"/assets/images/sayfabasindakifoto.jpg"}
                    className={"iq-banner overview-block-pt iq-bg-over iq-over-blue-90 iq-parallax jarallax"}
                >
                    <div className="container-fluid">
                        <div className="banner-text">
                            <div className="row">
                                <div className="col-lg-5 radx-header">
                                    <h1 className="text-uppercase iq-font-white iq-tw-3">
                                   <b className="iq-tw-7">RAD-X </b><br /><b className="iq-tw-6">Medical Data Archiving and Managemenet System </b> 
                                    </h1>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="banner-objects">
                        <span className="banner-objects-01" data-bottom="transform:translatey(50px)" data-top="transform:translatey(-50px);">
                            <img src="/assets/images/drive/03.png" alt="drive02" />
                        </span>
                        <span className="banner-objects-02 iq-fadebounce">
                            <span className="iq-round" />
                        </span>
                        <span className="banner-objects-03 iq-fadebounce">
                            <span className="iq-round" />
                        </span>
                    </div>
                </ParallaxHeroStyle1>

            </>
        );
    }

}

export default Index;