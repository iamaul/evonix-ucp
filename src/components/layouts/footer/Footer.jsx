import React from 'react';
import { Icon } from 'semantic-ui-react';

const Footer = () => (
    <>
        <footer>
            <p>
                <a href="http://facebook.com/EvonixRoleplay" target="_blank" rel="noopener noreferrer">
                    <Icon name="facebook official" />
                </a>
                <a href="http://twitter.com/EvonixRoleplay" target="_blank" rel="noopener noreferrer">
                    <Icon name="twitter square" />               
                </a> 
                <a href="http://instagram.com/evonixroleplay" target="_blank" rel="noopener noreferrer">
                    <Icon name="instagram" />
                </a>               
                <br/>          
                <Icon name="copyright outline" /> 2020 EvoniX Community.
            </p>
        </footer>
        <style>{`
            footer {
                left: 0;
                bottom: 0;
                width: 100%;
                text-align: center;
                padding: 10px;
            }
        `}</style>
    </>
)

export default Footer;
