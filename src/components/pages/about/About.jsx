import React from 'react';
import { Grid, Image, Divider } from 'semantic-ui-react';

const About = () => {
    return (
        <>
            <section id="about">
                <h1 className="head">About</h1>
                <Divider />
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Image src="https://evonix-rp.com/evx/images/cj-kw.png" size="massive" />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <p style={{ textAlign: 'justify' }}>
                                EvoniX merupakan komunitas gaming bagi pecinta konten Grand Theft Auto: San Andreas dimana kami memfokuskan komunitas San Andreas Multiplayer (SA-MP). EvoniX didirikan pada tahun 2018, namun <i>project</i> ini sempat terhambat dikarenakan kesibukan para <i>Staff</i> dan <i>Developers</i>.
                                Pada Januari, 2020, <i>management</i> dan <i>team</i> sepakat untuk melanjutkan <i>project</i> yang sempat tertunda. Kami memulai kembali semua dari awal dengan konsep, fitur, dan pembagian <i>management</i> yang baru. Kami akan berusaha semaksimal mungkin untuk membuat komunitas EvoniX maju lebih jauh dan memberikan pengalaman <i>roleplay</i> yang baru. 
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </section>
        </>
    )
}

export default About;
