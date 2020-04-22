import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';

import { userChangePassword } from '../../../actions/account';

const ChangePassword = ({ userChangePassword }) => {
    const [formData, setFormData] = useState({
        old_password: '',
        password: '',
        confirm_password: ''
    });

    const { old_password, password, confirm_password } = formData;

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

        if (password !== confirm_password) {
            Toast.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The new password confirmation does not match.'
            });
        } else {
            userChangePassword({ old_password, password });
        }
    }

    return (
        <>
            <Form onSubmit={e => onSubmit(e)}>
                <Form.Input
                    type="password"
                    name="old_password"
                    value={old_password}
                    icon="lock"
                    iconPosition="left"
                    placeholder="Old Password"
                    onChange={c => onChange(c)}
                    fluid
                />
                <Form.Input
                    type="password"
                    name="password"
                    value={password}
                    icon="lock"
                    iconPosition="left"
                    placeholder="New Password"
                    onChange={c => onChange(c)}
                    fluid
                />
                <Form.Input
                    type="password"
                    name="confirm_password"
                    value={confirm_password}
                    icon="lock"
                    iconPosition="left"
                    placeholder="Confirm New Password"
                    onChange={c => onChange(c)}
                    fluid
                />
                <Form.Button color="red" size="medium" content="Change" />
            </Form>
        </>
    )
}

ChangePassword.propTypes = {
    userChangePassword: PropTypes.func.isRequired
}

export default connect(null, { userChangePassword })(ChangePassword);
