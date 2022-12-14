import React from 'react';
import $ from 'jquery';
import { Link } from '../';

const jumpTo = (href) => {
    $('html, body').stop().animate({
        scrollTop: $(href).offset().top
    }, 1500);
    setTimeout(() => {
        if (typeof window !== "undefined") {
            console.log(window.location.hash);
            document.querySelectorAll(".navigation-custom-active a").forEach(el => {
                if (el.getAttribute("href") == window.location.hash) {
                    el.className = "nav-link active";
                } else {
                    el.className = "nav-link";
                }
            })
        }
    }, 1600);
};
const ChildMenu = (props) => {
    const navItem = props.child;
    const listItems = navItem.map((item, index) => (
        <li key={index} className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-506"}>
            <Link activeClassName='active' href={item.href}>
                <a>{item.title}</a>
            </Link>
        </li>
    ));

    return (
        <ul className={"sub-menu"} style={{ display: 'none' }}>{listItems}</ul>
    );
};

const Navigation = (props) => {
    const navItems = props.navItemList;
    const listItems = navItems.map((option, key) => (
        <li className="nav-item menu-item navigation-custom-active" key={key}>
            <a key={key} className="nav-link" onClick={() => { jumpTo(option.href) }} href={option.href}>
                {option.title}
                {option.children && (<i className="fa fa-angle-down toggledrop" aria-hidden="true" />)}
            </a>

            {option.children && (<ChildMenu child={option.child} />)}
        </li>
    ));
    return (
        <ul className="navbar-nav mr-auto w-100 justify-content-end menu">{listItems}</ul>
    );
};

const HeaderStyle1 = (props) => {
    const { children } = props;

    //const topbar = children.find(child => child.type === Topbar) && false;
    return (
        <>
            <header id="main-header" className={props.className}>
                {props.children}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="https://simplexbt.com/" target="_blank">
                                    <img className="img-fluid" id={props.styledLogo !== undefined && props.styledLogo ? 'logo_img' : 'new_image'} src="../../../assets/images/rad-x_NavBarLogo.png" alt="RAD-X" />
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="ion-navicon" />
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <Navigation navItemList={props.navItems} />
                                    {props.buttonSection}
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderStyle1;
