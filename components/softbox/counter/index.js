import React from 'react';

import { ParallaxHeroStyle1 } from '../';


import {index} from "../../../config/plugins";

class Index extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount(props) {

        setTimeout( () => {
            index();
        }, 500);

    }

    render() {

        return (
            <>
                <ParallaxHeroStyle1
                    ids="counter"
            
                    className="iq-ptb-100 iq-counter-box iq-bg-over iq-over-blue-90 iq-font-white iq-parallax jarallax">
                    <div className="container">

                        <div className="row">

                            <div className="col-lg-3 col-md-6 col-sm-12 text-left">
                                <div className="counter">

                                    <div className="counter-date">
                                        <label className="iq-font-white text-uppercase">Hospitals Served</label>
                                        <span className="iq-tw-7">100+</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 text-left">
                                <div className="counter">
                                    
                                    <div className="counter-date">
                                        <label className="iq-font-white text-uppercase">Radiologists Using RAD-X</label>
                                        <span className="iq-tw-7" >800+</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 text-left">
                                <div className="counter">
                                    
                                    <div className="counter-date">
                                        <label className="iq-font-white text-uppercase">Radiology Exams Stored</label>
                                        <span className="iq-tw-7">400M+</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 text-left">
                                <div className="counter">
                                    
                                    <div className="counter-date">
                                        <label className="iq-font-white text-uppercase">Data Archived</label>
                                        <span className="iq-tw-7">2PB+</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </ParallaxHeroStyle1>
            </>
        );
    }

}

export default Index;