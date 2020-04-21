import React from 'react';
import { 
    Grid, 
    Image,
    Item, 
    Button, 
    Icon
} from 'semantic-ui-react';

import forumLink from '../assets/images/forum_link.png';
import discordLink from '../assets/images/discord_link.png';
import supportLink from '../assets/images/support_link.png';

const index = () => (
    <>
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
                    <Image src={forumLink} as="a" href="http://forum.evonix-rp.com" />
                </Grid.Column>
                <Grid.Column>
                    <Image src={supportLink} as="a" href="http://support.evonix-rp.com" />
                </Grid.Column>
                <Grid.Column>
                    <Image src={discordLink} as="a" href="https://discord.gg/CgPcnZZ" />
                </Grid.Column>
            </Grid>
        </section>
    </>
)

export default index;
