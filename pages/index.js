import React from 'react';
import Head from 'next/head';
// Import asset...

// Import Components...
import Home from '../components/softbox/home';
import About from '../components/softbox/about';
import Services from '../components/softbox/services';
import Hospitals from '../components/softbox/hospitals';
import Advanced from '../components/softbox/Advanced';
import Specialities from '../components/softbox/specialities';
import Counter from '../components/softbox/counter';
import Faq from '../components/softbox/faq';
import Contact from '../components/softbox/contact';
import FooterSection from '../components/softbox/footerSection';
import Medex from '../components/softbox/medex';
import Loader from '../components/softbox/loader';
import HeaderStyle1 from '../components/softbox/headerStyle1';
import ScrollTop from '../components/softbox/scrollTop';
import logoImg from '../public/assets/images/logo.png';

// Import for the custom plugins...
import { index } from '../config/plugins';


// Import for the Sofbox components...

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                { href: '#iq-home', title: 'Home' },
                { href: '#references', title: 'References' },
                { href: '#contact', title: 'Contact' }
            ]
        };
    }

    componentDidMount(props) {

        setTimeout(() => {
            index();
        }, 500);

    }

    render() {
        const { menu } = this.state;
        return (
            <>
                {/* Heading section */}
                <Head>
                    <title>RAD-X</title>
                    <meta name="keywords" content="RAD-X" />
                    <meta name="description" content="RAD-X" />
                    <meta name="author" content="https://simplexbt.com/" />
                    <link rel="shortcut icon" href="/assets/images/favicon.ico" />
                </Head>

                <Loader />

                <HeaderStyle1
                    className={""}
                    navItems={menu}
                    logoImg={logoImg}
                    styledLogo={false}
                />

                <Home />


                <div className="main-content">

                    <About />

                    <Services />

                    <Advanced />

                    <Medex />

                    <Specialities />

                    <Counter />



                    <Hospitals />

                    <Faq />

                </div>

                <footer>

                    <Contact />

                    <FooterSection />
                </footer>

                <ScrollTop />

            </>
        );
    }

}

export default Index;