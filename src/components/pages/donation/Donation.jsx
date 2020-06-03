import React from 'react';
import { Header, Icon, Divider } from 'semantic-ui-react';

const Donation = () => {
    return (
        <>
            <section id="donation">
                <h1 className="head">Donation</h1>
                <Divider />
                <Header as="h1" icon textAlign="center">
                    <Icon name="wrench" circular />
                    <Header.Content>COMING SOON!</Header.Content>
                </Header>  
            </section>
        </>
    )
}

export default Donation;
