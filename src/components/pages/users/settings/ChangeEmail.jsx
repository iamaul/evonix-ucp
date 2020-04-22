import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import Swal from 'sweetalert2';

import { userChangeEmail } from '../../../actions/account';

const ChangeEmail = ({ currentEmail, userChangeEmail }) => {
    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = c => setFormData({
        ...formData,
        [c.target.name]: c.target.value
    });

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end'
    });

    const onSubmit = async e => {
        e.preventDefault();

        userChangeEmail({ email });
    }

    return (
        <>
            <Form onSubmit={e => onSubmit(e)}>
                <Form.Group>
                    <Form.Input
                        type="email"
                        name="email"
                        value={email}
                        icon="envelope"
                        iconPosition="left"
                        placeholder={currentEmail}
                        onChange={c => onChange(c)}
                        fluid
                    />
                    <Form.Button color="red" content="Change" />
                </Form.Group>
            </Form>
        </>
    )
}

ChangeEmail.propTypes = {
    userChangeEmail: PropTypes.func.isRequired
}

export default connect(null, { userChangeEmail })(ChangeEmail);
