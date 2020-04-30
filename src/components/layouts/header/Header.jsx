import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header as Head, Image, Divider, Label, Icon } from 'semantic-ui-react';

import Navbar from '../navbar/Navbar';
import Loader from '../loader/Loader';

import { getApiSampServer } from '../../actions/samp';

import './style.scss';

const Header = ({ getApiSampServer, samp: { server, setLoading } }) => {
    useEffect(() => {
        getApiSampServer();
    }, [getApiSampServer])

    const linkIp = `samp://${server && server.core.ip}`;

    return (
        <>
            <Head as="h3" textAlign="center">
                <Image centered src="/assets/images/evonix-logo.png" size="massive"/><br/>
                User Control Panel
                <Head.Subheader>
                    This <b>beta version</b> could be unstable and there may even be bugged sometimes, If you're facing issues please submit a ticket on 
                    <u><a href="http://support.evonix-rp.com" target="_blank" rel="noopener noreferrer"> support.evonix-rp.com</a></u>
                </Head.Subheader><br/>
                { setLoading ? (<Loader isLoading={setLoading} resizeIcon={32} />) : server && server.active ? (
                    <Label image color="green" as="a" href={linkIp}>
                        <Icon name="server" />
                        Online
                        <Label.Detail>{ server && server.core.pc } / { server && server.core.pm }</Label.Detail>
                    </Label>
                    ) : (
                    <Label image color="red">
                        <Icon name="server" />
                        Offline
                    </Label>
                    )
                }
            </Head>
            <Navbar />
            <Divider />
        </>
    )
}

Header.propTypes = {
    getApiSampServer: PropTypes.func.isRequired,
    samp: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    samp: state.samp
});

export default connect(mapStateToProps, { getApiSampServer })(Header);
