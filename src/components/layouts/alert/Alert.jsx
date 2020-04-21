import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';

const Alert = ({ alerts }) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
    <Message 
        negative
        key={alert.id}
        size="tiny"
    >
        <Message.Header>Oops! there was an error with your submission.</Message.Header>
            <p>
                {alert.message}
            </p>
    </Message>
));

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
