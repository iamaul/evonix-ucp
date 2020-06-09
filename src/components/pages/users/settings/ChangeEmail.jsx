import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';

import { userChangeEmail } from '../../../actions/account';

const ChangeEmail = ({ currentEmail, userChangeEmail, account: { requestChangeEmail } }) => {
    const [formData, setFormData] = useState({ new_email: '' });

    const { new_email } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();

        userChangeEmail({ new_email });
    }

    return (
        <>
            <Form onSubmit={e => onSubmit(e)}>
                <Form.Input
                    type="email"
                    name="new_email"
                    value={new_email}
                    icon="envelope"
                    iconPosition="left"
                    placeholder={currentEmail}
                    onChange={onChange}
                />
                <Form.Button color="red" size="medium" content="Change" loading={requestChangeEmail} />
            </Form>
        </>
    )
}

ChangeEmail.propTypes = {
    userChangeEmail: PropTypes.func.isRequired,
    account: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    account: state.account
});

export default connect(mapStateToProps, { userChangeEmail })(ChangeEmail);
