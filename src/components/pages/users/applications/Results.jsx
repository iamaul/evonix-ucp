import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const Results = ({ submissions, maxSubmissions, score }) => {
    let print = '';

    if (submissions === 0) {
        print = (
            <Message info size="small">
                <p style={{ textAlign: 'justify' }}>
                    Hey there! The quiz below is made up of 10 multiple choices of random questions. 
                    There may have 4 or fewer questions answer options, so please choose the correct answers wisely.<br/><br/>
                    <b>Note</b>: You are allowed up to 2 submissions in case you are finished with a low score <span role="img" aria-label="face-savouring-food">😋</span>.
                </p>
            </Message>
        )
    } else if (maxSubmissions) {
        print = (
            <Message warning size="small">
                <p style={{ textAlign: 'justify' }}>
                    Your final score was <b>{score}</b>, you {score >= 70 ? 'passed the quiz! You can now go to the next one.' : 'failed the quiz! take your time to check our server rules and try again.'}
                </p>
            </Message>
        )
    } else {
        print = (
            <Message success size="small">
                <p style={{ textAlign: 'justify' }}>
                    Your score was <b>{score}</b>, it means that you are {score >= 70 ? (<b>passed</b>) : (<b>failed</b>)} the quiz. {score < 70 && (
                        <>Don't worry the quiz isn't ended yet for you. You still have 1 submission left, you can do fixing the incorrect questions answer below and press the button at the bottom of the page to submit your final score.</>
                    )}
                    {score >= 70 && (
                        <>Wohooo <span role="img" aria-label="raised-hands">🙌</span>! We are happy that you are passed the quiz. You can now go to the next step, press the button at the bottom of the page to submit your final score!</>
                    )}
                </p>
            </Message>
        )
    }
    return print;
}

Results.propTypes = {
    submissions: PropTypes.number.isRequired,
    maxSubmissions: PropTypes.bool.isRequired,
    numbersCorrect: PropTypes.number.isRequired
}

export default Results;
