import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Header, Icon, Segment, Grid } from 'semantic-ui-react';

import { getCountUserCharacters } from '../../actions/character';

import Loader from '../../layouts/loader/Loader';
import Sidebar from '../../layouts/sidebar/Sidebar';

const Characters = ({ getCountUserCharacters, user_chars: { chars, count, setLoading, error } }) => {
    useEffect(() => {
        getCountUserCharacters();
    }, [getCountUserCharacters])

    return (
        <>
            <section id="characters">
                <Grid stackable>
                    <Sidebar />
                    <Grid.Column stretched width={12}>
                        {error && error.msg && (
                            <Segment>
                                <Segment placeholder textAlign="center">
                                    <Header icon>
                                        <Icon name='search' />
                                        { error && error.msg }
                                    </Header>
                                    <Button primary>Add New</Button>
                                </Segment>
                            </Segment>
                        )}
                        { setLoading ? (<Loader isLoading={setLoading} />) : console.log(chars, count) }
                    </Grid.Column>
                </Grid>
            </section>
        </>
    )
}

Characters.propTypes = {
    getCountUserCharacters: PropTypes.func.isRequired,
    user_chars: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    user_chars: state.user_chars
});

export default connect(mapStateToProps, { getCountUserCharacters })(Characters);
