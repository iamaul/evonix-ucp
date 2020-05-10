import React from 'react';
import {
    Grid,
    Header,
    Segment,
    Label,
    Image,
    Form,
    Button,
    Icon
} from 'semantic-ui-react';

const Scenario = () => {
    return (
        <>
            <Grid textAlign="center" style={{ height: "60vh" }} verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 700 }}>
                    <Header as="h2" textAlign="center">
                        <Image src="/assets/images/evonix-logo.png" size="massive" to="/" />
                    </Header>
                    <Segment color="red" stacked>
                        <Header as="h3" textAlign="center">
                            Step 2: Scenario
                        </Header>
                        <p style={{ textAlign: "justify" }}>
                            <Label ribbon size="small">
                                Deathmatching Scenario
                            </Label>
                            <Image src="https://evonix-rp.com/quiz/dm-scene.png" bordered />
                            <small>
                                <i>
                                <p style={{ textAlign: "center" }}>
                                    Gambar di atas merupakan ilustrasi dari scenario yang dibuat.
                                </p>
                                </i>
                            </small>
                            <br />
                            Joe adalah seorang anggota gangster dari 187th Idlewood Bloods. Joe
                            mempunyai akses untuk mendapatkan beberapa senjata seperti Desert
                            Eagle dan Micro Uzi. Dengan fasilitas yang ia dapatkan di factionnya
                            tersebut, Joe berlaku semena-mena dengan mendatangi kelompok lain
                            dan melakukan provokasi ke kelompok tersebut dan berakhir dengan Joe
                            menembaki kelompok itu tanpa alasan yang jelas. Menurut pandangan
                            dan pengetahuan kamu, apakah aksi dari skenario di atas dibenarkan?
                            (Berikan penjelasan secara rinci terkait hal tersebut apakah kamu
                            setuju atau tidak)
                        </p>
                        <Form size="small">
                            <Form.Field>
                                <textarea placeholder="Answer here ..." rows="5" col="5" />
                            </Form.Field>
                            <Form.Field>
                                <Button icon color="red" size="tiny" labelPosition="right">
                                Submit
                                <Icon name="save" />
                                </Button>
                            </Form.Field>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </>
    )
}

export default Scenario;
