import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
    Grid, 
    Image,
    Item, 
    Button, 
    Icon,
    Segment,
    Table,
    Header,
    Label
} from 'semantic-ui-react';

import { getApiSampServer } from './actions/samp';

import Loader from './layouts/loader/Loader';

const Home = ({ getApiSampServer, samp: { server, sampLoader } }) => {
    useEffect(() => {
        getApiSampServer();
    }, [getApiSampServer])

    return (
        <>
            <section>
                <Segment raised size="small" textAlign="center">
                    <Header as="h4" textAlign="center">Server Status</Header>
                    { server & server.active ? (
                        <Label color="green" size="tiny" pointing="left" floating>
                            <Icon name="wifi" /> Online
                        </Label>
                    ) : (
                        <Label color="red" size="tiny" pointing="left" floating>
                            <Icon name="power off" /> Offline
                        </Label>
                    )}
                    { sampLoader ? (<Loader isLoading={sampLoader} />) : (
                        <Table size="small">
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell><b>IP</b></Table.Cell>
                                    <Table.Cell>{ server && server.core.ip }</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell><b>Hostname</b></Table.Cell>
                                    <Table.Cell>{ server && server.core.hn }</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell><b>Players</b></Table.Cell>
                                    <Table.Cell>{ server && server.core.pc } / { server && server.core.pm }</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell><b>Gamemode</b></Table.Cell>
                                    <Table.Cell>{ server && server.core.gm }</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell><b>Language</b></Table.Cell>
                                    <Table.Cell>{ server && server.core.la }</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell><b>Version</b></Table.Cell>
                                    <Table.Cell>{ server && server.core.vn }</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    )}
                </Segment>
            </section>
            <section id="news">
                <h1 className="head">News</h1>
                <hr/>
                <Item.Group divided>
                    <Item>
                        <Item.Image src="https://place-hold.it/800x800&text=Image&fontsize=32" />

                        <Item.Content>
                            <Item.Header as="a">Title</Item.Header>
                            <Item.Meta>
                                <span className="cinema">createdAt - username</span>
                            </Item.Meta>
                            <Item.Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia, magna et hendrerit hendrerit, justo arcu euismod ex, sit amet vestibulum velit nisi ac nulla. In in sagittis sem, in volutpat nulla. Nullam ullamcorper pellentesque nunc, non tempor nisi ultricies sed. Curabitur eget malesuada nibh. Vivamus dictum purus sed ex volutpat bibendum id non nisi. Curabitur ac vestibulum mauris. Donec facilisis malesuada mi eget accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet malesuada leo, vitae aliquam ipsum. Nunc blandit nisl rhoncus luctus rhoncus. Vivamus ex tellus, volutpat ac diam in, tempus pulvinar enim.
                            </Item.Description>
                            <Item.Extra>
                                <Button secondary size="mini">
                                    Read more
                                    <Icon name="right chevron" />
                                </Button>
                            </Item.Extra>
                        </Item.Content>
                    </Item>

                    <Item>
                        <Item.Image src="https://place-hold.it/800x800&text=Image&fontsize=32" />

                        <Item.Content>
                            <Item.Header as="a">Title</Item.Header>
                            <Item.Meta>
                                <span className="cinema">createdAt - username</span>
                            </Item.Meta>
                            <Item.Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia, magna et hendrerit hendrerit, justo arcu euismod ex, sit amet vestibulum velit nisi ac nulla. In in sagittis sem, in volutpat nulla. Nullam ullamcorper pellentesque nunc, non tempor nisi ultricies sed. Curabitur eget malesuada nibh. Vivamus dictum purus sed ex volutpat bibendum id non nisi. Curabitur ac vestibulum mauris. Donec facilisis malesuada mi eget accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet malesuada leo, vitae aliquam ipsum. Nunc blandit nisl rhoncus luctus rhoncus. Vivamus ex tellus, volutpat ac diam in, tempus pulvinar enim.
                            </Item.Description>
                            <Item.Extra>
                                <Button secondary size="mini">
                                    Read more
                                    <Icon name="right chevron" />
                                </Button>
                            </Item.Extra>
                        </Item.Content>
                    </Item>

                    <Item>
                        <Item.Image src="https://place-hold.it/800x800&text=Image&fontsize=32" />

                        <Item.Content>
                            <Item.Header as="a">Title</Item.Header>
                            <Item.Meta>
                                <span className="cinema">createdAt - username</span>
                            </Item.Meta>
                            <Item.Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia, magna et hendrerit hendrerit, justo arcu euismod ex, sit amet vestibulum velit nisi ac nulla. In in sagittis sem, in volutpat nulla. Nullam ullamcorper pellentesque nunc, non tempor nisi ultricies sed. Curabitur eget malesuada nibh. Vivamus dictum purus sed ex volutpat bibendum id non nisi. Curabitur ac vestibulum mauris. Donec facilisis malesuada mi eget accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet malesuada leo, vitae aliquam ipsum. Nunc blandit nisl rhoncus luctus rhoncus. Vivamus ex tellus, volutpat ac diam in, tempus pulvinar enim.
                            </Item.Description>
                            <Item.Extra>
                                <Button secondary size="mini">
                                    Read more
                                    <Icon name="right chevron" />
                                </Button>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </section>
            <section id="quick-links">
                <h1 className="head">Quick Links</h1>
                <hr/>
                <Grid container columns={3} relaxed stackable>
                    <Grid.Column>
                        <Image src="/assets/images/forum_link.png" as="a" href="http://forum.evonix-rp.com" />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src="/assets/images/support_link.png" as="a" href="http://support.evonix-rp.com" />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src="/assets/images/discord_link.png" as="a" href="https://discord.gg/CgPcnZZ" />
                    </Grid.Column>
                </Grid>
            </section>
        </>
    )
}

Home.propTypes = {
    getApiSampServer: PropTypes.func.isRequired,
    samp: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    samp: state.samp
});

export default connect(mapStateToProps, { getApiSampServer })(Home);
