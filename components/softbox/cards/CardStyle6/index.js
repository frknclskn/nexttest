import React from 'react';

const Index = (props) => {

    return (
        <>
            <div className="iq-fancy-box iq-works-box text-center">
                <div className="iq-icon">
                    <img aria-hidden="true" src={props.icon} />
                </div>
                <div className="fancy-content">
                    { props.children }
                </div>
            </div>

        </>
    );
};

export default Index;