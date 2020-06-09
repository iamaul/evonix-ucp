import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';

import { userChangeEmail } from '../../../actions/account';

const ChangeEmail = ({ currentEmail, userChangeEmail, account: { account_settings, setLoading } }) => {
    const [loadingButton, setLoadingButton] = useState(false);
    const [formData, setFormData] = useState({ new_email: '' });

    const { new_email } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();

        setLoadingButton(true);
        userChangeEmail({ new_email });
    }

    if (account_settings !== null && !setLoading) {
        setLoadingButton(false);
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
                <Form.Button color="red" size="medium" content="Change" loading={loadingButton} />
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
