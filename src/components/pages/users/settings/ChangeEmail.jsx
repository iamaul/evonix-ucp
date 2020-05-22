import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';

import { userChangeEmail } from '../../../actions/account';

const ChangeEmail = ({ currentEmail, userChangeEmail }) => {
    const [formData, setFormData] = useState({ new_email: '' });

    const { new_email } = formData;

    const onChange = c => setFormData({
        ...formData,
        [c.target.name]: c.target.value
    });

    const onSubmit = async e => {
        e.preventDefault();

        userChangeEmail({ new_email });
        setFormData({ new_email: '' });
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
                <Form.Button color="red" content="Change" />
            </Form>
        </>
    )
}

ChangeEmail.propTypes = {
    userChangeEmail: PropTypes.func.isRequired
}

export default connect(null, { userChangeEmail })(ChangeEmail);
