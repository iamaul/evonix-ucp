import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';

import { userChangeEmail } from '../../../actions/account';

const ChangeEmail = ({ auth: { user }, userChangeEmail }) => {
    const [formData, setFormData] = useState({ email: '' });

    const { email } = formData;

    const onChange = c => setFormData({
        ...formData,
        [c.target.name]: c.target.value
    });

    const onSubmit = async e => {
        e.preventDefault();

        userChangeEmail({ email });
    }

    return (
        <>
            <Form onSubmit={e => onSubmit(e)}>
                <Form.Group inline>
                    <Form.Input
                        label="Change Email"
                        type="email"
                        name="email"
                        value={email}
                        icon="envelope"
                        iconPosition="left"
                        placeholder={this.props.currentEmail}
                        onChange={c => onChange(c)}
                    />
                    <Form.Button color="red" content="Change" />
                </Form.Group>
            </Form>
        </>
    )
}

ChangeEmail.propTypes = {
    userChangeEmail: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { userChangeEmail })(ChangeEmail);
