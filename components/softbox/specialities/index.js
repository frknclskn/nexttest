import React from "react";

import { CardStyle6 } from "../";

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                {
                    icon: "/assets/images/customizable-icon_1.png",
                    title: "Radiology Reporting",
                },
                {
                    icon: "/assets/images/customizable-icon_2.png",
                    title: "Quality Assurance",
                },
                {
                    icon: "/assets/images/customizable-icon_3.png",
                    title: "AI Labeling",
                },
                {
                    icon: "/assets/images/customizable-icon_4.png",
                    title: "Teleconsultation",
                },
                {
                    icon: "/assets/images/customizable-icon_5.png",
                    title: "Structed Reporting",
                },
                {
                    icon: "/assets/images/customizable-icon_6.png",
                    title: "Pathology Reporting",
                },
                {
                    icon: "/assets/images/customizable-icon_7.png",
                    title: "AI Validation",
                },
                {
                    icon: "/assets/images/customizable-icon_8.png",
                    title: "Scheduling",
                },
            ],
        };
    }

    render() {
        const { list } = this.state;
        return (
            //customizable-icon_1.png
            <>
                <section className="overview-block-ptb grey-bg iq-specialities">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12" id="FullyCustomizable">
                                <div className="heading-title">
                                    <h3 className="title iq-tw-7">
                                        Fully Customizable Workflow Engine
                                    </h3>
                                    <p>
                                        RAD-X facilitates all types of workflows from reporting to
                                        quality control.
                                        <br />You can create and deploy custom workflows
                                        thanks to its unique workflow engine.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {list.map((item, index) => (
                                <div
                                    key={index}
                                    className="col-sm-12 col-lg-3 col-md-6 iq-mb-30"
                                >
                                    <CardStyle6 icon={item.icon}>
                                        <h5 className="iq-tw-7 iq-pt-20 iq-pb-10">{item.title}</h5>
                                        <p>{item.description}</p>
                                    </CardStyle6>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Index;
