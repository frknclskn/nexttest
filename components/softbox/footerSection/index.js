import React from 'react';

const Index = (props) => {

    return (
        <>
            <section className="footer-info iq-pt-100 footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-4">
                            <div className="iq-footer-box text-left">
                                <div className="iq-icon">
                                    <i aria-hidden="true" className="ion-ios-location-outline" />
                                </div>
                                <div className="footer-content">
                                    <h4 className="iq-tw-7 iq-pb-10">Address</h4>
                                    <p>Ankara Üniversitesi Teknoloji Geliştirme Bölgesi C Blok 1. Kat No:12, 06830 Gölbaşı/Ankara Türkiye</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 r4-mt-30">
                            <div className="iq-footer-box text-left">
                                <div className="iq-icon">
                                    <i aria-hidden="true" className="ion-ios-telephone-outline" />
                                </div>
                                <div className="footer-content">
                                    <h4 className="iq-tw-7 iq-pb-10">Phone</h4>
                                    <p>+90 312 485 65 05
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 r-mt-30">
                            <div className="iq-footer-box text-left">
                                <div className="iq-icon">
                                    <i aria-hidden="true" className="ion-ios-email-outline" />
                                </div>
                                <div className="footer-content">
                                    <h4 className="iq-tw-7 iq-pb-10">Mail</h4>
                                    <p><a href="mailto:info@simplexbt.com/">info@simplexbt.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row iq-mt-40">
                        <div className="col-sm-12 text-center">
                            <div className="footer-copyright iq-ptb-20">© <span id="copyright"> 2022</span>
                                <a href="#" className="text-green"></a> Simplex Information Technologies Inc.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Index;