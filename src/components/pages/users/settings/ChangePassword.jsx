import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import Swal from 'sweetalert2';

import { userChangePassword } from '../../../actions/account';

const ChangePassword = ({ userChangePassword, account: { requestChangePassword } }) => {
    const initialState = {
        old_password: '',
        password: '',
        confirm_password: ''
    }

    const [formData, setFormData] = useState(initialState);

    const { old_password, password, confirm_password } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end'
    });

    const onSubmit = e => {
        e.preventDefault();

        if (password !== confirm_password) {
            Toast.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The new password confirmation does not match.'
            });
        } else {
            userChangePassword({ old_password, password });
            setFormData({ ...initialState });
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
                    onChange={onChange}
                    fluid
                />
                <Form.Input
                    type="password"
                    name="password"
                    value={password}
                    icon="lock"
                    iconPosition="left"
                    placeholder="New Password"
                    onChange={onChange}
                    fluid
                />
                <Form.Input
                    type="password"
                    name="confirm_password"
                    value={confirm_password}
                    icon="lock"
                    iconPosition="left"
                    placeholder="Confirm New Password"
                    onChange={onChange}
                    fluid
                />
                <Form.Button color="red" size="medium" content="Change" loading={requestChangePassword} />
            </Form>
        </>
    )
}

ChangePassword.propTypes = {
    userChangePassword: PropTypes.func.isRequired,
    account: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    account: state.account
});

export default connect(mapStateToProps, { userChangePassword })(ChangePassword);
