import React from 'react';

import ParallaxHeroStyle1  from '../PricingCardStyle1';

const Index = (props) => {

    return (
        <>
            <div className="iq-pricing text-center">
                <ParallaxHeroStyle1
                    bgImage={ props.bgImage }
                    className="price-title iq-parallax iq-over-blue-80 jarallax"
                >
                    <h2 className="iq-font-white iq-tw-7">{ props.title }</h2>
                    <span className="text-uppercase iq-tw-4 iq-font-white">{ props.subTitle }</span>
                </ParallaxHeroStyle1>


                { props.children }
            </div>
        </>
    );
};

export default Index;