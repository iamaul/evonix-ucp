import React, { useState } from 'react';

import Introduction from './Introduction';
import MultipleChoice from './MultipleChoice';
import Scenario from './Scenario';

const Quiz = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step+1);
    const prevStep = () => setStep(step-1);

    switch (step) {
        case 1: return <Introduction nextStep={nextStep} />;
        case 2: return <MultipleChoice nextStep={nextStep} prevStep={prevStep} />;
        case 3: return <Scenario nextStep={nextStep} prevStep={prevStep} />;    
        default: return <Introduction nextStep={nextStep} />;
    }
}

export default Quiz;
