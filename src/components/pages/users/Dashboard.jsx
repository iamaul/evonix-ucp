import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
    Segment,
    Header
} from 'semantic-ui-react';

import Sidebar from '../../layouts/sidebar/Sidebar';

const Dashboard = ({ auth: { user } }) => {
    return (
        <>
            <Sidebar />
            <Segment attached="bottom">
                <Header as="h2">
                    <Header.Content>Welcome { user && user.name }!</Header.Content>
                    {/* <Image src="https://gph.is/g/Zdw5y1a" size="medium" centered bordered /> */}
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elit turpis, efficitur id leo ut, feugiat suscipit mi. Pellentesque rutrum nibh lectus, ac laoreet diam mollis at. In hac habitasse platea dictumst. Donec dignissim urna sit amet quam tempus rhoncus. Etiam leo turpis, dignissim quis massa vel, tempor scelerisque erat. Donec volutpat porta elit, ornare sollicitudin nunc aliquet vitae. Nulla pharetra eget felis nec sagittis. Phasellus quis cursus dui, tempor convallis dui. Etiam risus sapien, tempor sit amet pulvinar vel, congue eu nisi. Praesent non eleifend eros. Nullam nibh tellus, consectetur vel libero non, luctus aliquet nisl. Quisque fermentum ex a velit pretium fringilla.
                    </p>
                </Header>
            </Segment>
        </>
    )
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
