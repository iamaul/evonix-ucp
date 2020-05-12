import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Introduction from './Introduction';
import MultipleChoice from './MultipleChoice';
import Scenario from './Scenario';

import Loader from '../../../layouts/loader/Loader';

const Quiz = ({ auth: { user, setLoading } }) => {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step+1);
    const prevStep = () => setStep(step-1);

    switch (step) {
        case 1: {
            if (setLoading) 
                return <Loader isLoading={setLoading} />;
            else
                return <Introduction nextStep={nextStep} user={user} />;
        }
        case 2: return <MultipleChoice nextStep={nextStep} prevStep={prevStep} />;
        case 3: return <Scenario nextStep={nextStep} prevStep={prevStep} />; 
        default: return <Introduction nextStep={nextStep} />;
    }
}

Quiz.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Quiz);
