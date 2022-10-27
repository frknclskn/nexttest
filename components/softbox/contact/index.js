import React from 'react';

import { ContactForm } from '../';

class Index extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <>
                <section id="contact" className="footer-info white-bg">
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-md-6 col-lg-4">
                                <div className="iq-get-in">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                    <iframe className="map rad-x-map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6132.086033587975!2d32.814731!3d39.78359!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x227d02321aaed47b!2sSimplex%20Bilgi%20Teknolojileri%20A.%C5%9E!5e0!3m2!1str!2sus!4v1662986200579!5m2!1str!2sus"
                        style={{ border: 0 }} allowFullScreen />
                </section>
            </>
        );
    }

}

export default Index;