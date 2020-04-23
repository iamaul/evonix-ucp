import React from 'react';
import { Header as Head, Image, Divider } from 'semantic-ui-react';

import Navbar from '../navbar/Navbar';

import evonixLogo from '../../../assets/images/evonix-logo.png';

import './style.scss';

const Header = () => (
    <>
        <Head as="h3" textAlign="center">
            <Image centered src={evonixLogo} size="massive"/><br/>
            User Control Panel
            <Head.Subheader>
                This <b>beta version</b> could be unstable and there may even be bugged sometimes, If you're facing issues please submit a ticket on 
                <u><a href="http://support.evonix-rp.com" target="_blank" rel="noopener noreferrer"> support.evonix-rp.com</a></u>
            </Head.Subheader>
        </Head>
        <Navbar />
        <Divider />
    </>
)

export default Header;
