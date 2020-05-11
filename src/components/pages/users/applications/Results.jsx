import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const Results = ({ submissions, maxSubmissions, numbersCorrect }) => {
    let print = '';
    const score = {numbersCorrect}*10;

    if (submissions === 0) {
        print = (
            <Message info size="small">
                <Message.Header>Notes</Message.Header>
                <p style={{ textAlign: 'justify' }}>
                    Hey there! We'd love to see you in-game as soon as possible, so here we're given you to have a chance of passing the quiz by allowing up to 2 submissions. Good luck!
                </p>
            </Message>
        )
    } else if (maxSubmissions) {
        print = (
            <Message error size="small">
                <p style={{ textAlign: 'justify' }}>
                    Sorry, you have 2 submissions already. Any further submissions will not be accepted. Thank you!
                </p>
            </Message>
        )
    } else {
        print = (
            <Message success size="small">
                <p style={{ textAlign: 'justify' }}>
                    Your score was <b>{score}</b>, it means that you are {score < 80 ? 'passed' : 'failed' } the quiz. {score < 70 && (
                        <>Don't worry the quiz isn't ended yet for you. You still have 1 submission left, you can do fixing the incorrect questions answer below and press the button at the bottom of the page to submit your final score.</>
                    )}
                    {score < 80 && (
                        <>Wohooo! We are happy that you are passed the quiz. You can now go to the next step, press the button at the bottom of the page to submit your final score!</>
                    )}
                </p>
            </Message>
        )
    }
    return print;
}

Results.propTypes = {
    submissions: PropTypes.number.isRequired,
    maxSubmissions: PropTypes.number.isRequired,
    numbersCorrect: PropTypes.number.isRequired,
}

export default Results;
