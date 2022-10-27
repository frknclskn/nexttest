import React from 'react';

const SocialLinks = (props) => {
    const links = props.links;
    const nav = links.map((link, index) => {

        return (
            <li key={index}>
                <a href={ link.link }>
                    <i className={ link.icon } />
                </a>
            </li>
        );
    });

    return (
        <>
            <ul className="list-inline">
                { nav }
            </ul>
        </>
    );

};

const Index = (props) => {

    return (
        <>
            <div className="iq-team2 text-center">
                <div className="team-content">
                    <img alt="" className="img-fluid" src={ props.media } />
                </div>
                <div className="avtar-name iq-mt-20 iq-font-white text-center">
                    <a href="#">
                        <h6 className="iq-font-white iq-tw-6">{ props.title }</h6>
                    </a>
                    <span>{ props.subtitle }</span>
                </div>
                <div className="team-social iq-mt-10">
                    <SocialLinks links={ props.socialLinks } />
                </div>
            </div>
        </>
    );
};


export default Index;
