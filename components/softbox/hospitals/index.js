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
            <div className="carousel-bg-color">
                <div className="carousel-advanced heading-title hospitals-m ">
                    <h3 className="iq-tw-7 iq-mb-25 title">
                        100+ Hospitals Served Worldwide
                    </h3>
                    <p>
                        We provide PACS, RIS and VNA solutions to 100+ public and private hosptials worldwide including
                        Etlik City Hospital (Ankara-Turkey) which is the largest hosptial in Europe.
                    </p>
                </div>
                <div
                    id="references"
                    className="carousel slide carousel-bg-color hospital-height"
                    data-ride="carousel"
                    data-interval="false"
                >
                    {/*<ol className="carousel-indicators crs-indicators">*/}
                    {/*    <li*/}
                    {/*        data-target="#references"*/}
                    {/*        data-slide-to="0"*/}
                    {/*        className="active"*/}
                    {/*    ></li>*/}
                    {/*    <li data-target="#references" data-slide-to="1"></li>*/}
                    {/*    <li data-target="#references" data-slide-to="2"></li>*/}
                    {/*    <li data-target="#references" data-slide-to="3"></li>*/}
                    {/*    <li data-target="#references" data-slide-to="4"></li>*/}
                    {/*    <li data-target="#references" data-slide-to="5"></li>*/}
                    {/*    <li data-target="#references" data-slide-to="6"></li>*/}
                    {/*    <li data-target="#references" data-slide-to="7"></li>*/}
                    {/*    <li data-target="#references" data-slide-to="8"></li>*/}
                    {/*    <li data-target="#references" data-slide-to="9"></li>*/}
                    {/*</ol>*/}
                    <div className="carousel-inner ">
                        <div className="carousel-item">
                            <img
                                src="/assets/images/etlik.jpg"
                                className="d-block carousel-img-adv"
                                alt="..."
                            />
                            <h3 className="mt-3">Etlik City Hospital</h3>
                            <p className="carousel-text">
                                Europe’s largest hospital!
                            </p>
                        </div>

                        <div className="carousel-item active">
                            <img
                                src="/assets/images/konya.jpg"
                                className="d-block carousel-img-adv "
                                alt="..."
                            />
                            <h3 className="mt-3">Konya City Hospital</h3>
                            <p className="carousel-text">
                                ~900K Exams and ~400K Reports per annum
                            </p>
                        </div>

                        <div className="carousel-item">
                            <img
                                src="/assets/images/istanbulea.jpg"
                                className="d-block carousel-img-adv"
                                alt="..."
                            />
                            <h3 className="mt-3">İstanbul Research & Training Hospital</h3>
                            <p className="carousel-text">

                                ~400K Exams and ~300K Reports per annum
                            </p>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="/assets/images/haseki.jpg"
                                className="d-block carousel-img-adv"
                                alt="..."
                            />
                            <h3 className="mt-3">Sultangazi Haseki Research & Training Hospital</h3>
                            <p className="carousel-text">

                                ~500K Exams and ~200K Reports per annum

                            </p>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="/assets/images/göztepe.jpg"
                                className="d-block carousel-img-adv"
                                alt="..."
                            />
                            <h3 className="mt-3">Göztepe Prof. Dr. Süleyman Yalçın City Hospital</h3>
                            <p className="carousel-text">
                                ~400K Exams and ~300K Reports per annum
                            </p>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="/assets/images/sancaktepe.jpg"
                                className="d-block carousel-img-adv"
                                alt="..."
                            />
                            <h3 className="mt-3">Sancaktepe Şehit Profesör Dr. İlhan Varank Research & Training Hospital</h3>
                            <p className="carousel-text">
                                ~500K Exams and ~400K Reports per annum
                            </p>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="/assets/images/ümraniye.jpg"
                                className="d-block carousel-img-adv"
                                alt="..."
                            />
                            <h3 className="mt-3">Ümraniye Research & Training Hospital</h3>
                            <p className="carousel-text">
                                ~500K Exams and ~300K Reports per annum
                            </p>
                        </div>

                        <div className="carousel-item">
                            <img
                                src="/assets/images/konyaNumune.jpg"
                                className="d-block carousel-img-adv"
                                alt="..."
                            />
                            <h3 className="mt-3">Konya Numune Hospital</h3>
                            <p className="carousel-text">
                                ~300K Exams and ~200K Reports per annum
                            </p>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="/assets/images/siyamiErsek.jpg"
                                className="d-block carousel-img-adv"
                                alt="..."
                            />
                            <h3 className="mt-3">Dr. Siyami Ersek Thoracic and Cardiovascular Surgery Research & Training Hospital</h3>
                            <p className="carousel-text">
                                ~300K Exams and ~200K Reports per annum
                            </p>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="/assets/images/fsm.jpg"
                                className="d-block carousel-img-adv"
                                alt="..."
                            />
                            <h3 className="mt-3">Fatih Sultan Mehmet Research & Training Hospital</h3>
                            <p className="carousel-text">
                                ~400K Exams and ~200K Reports per annum
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
                        className="carousel-control-next"
                        type="button"
                        data-target="#references"
                        data-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon control-carousel "
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

