import React from 'react';
import { Card, Image, Grid, Responsive } from 'semantic-ui-react';

const BlogList = () => {
    return (
        <section id="blog">
            <h1 className="head">Blogs</h1>
            <hr/>
            <Responsive>
                <Grid stackable columns={4}>
                    <Grid.Column mobile={16} computer={4}>
                        <Card>
                            <Image src="https://place-hold.it/600x400&text=Image&fontsize=32" wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Title</Card.Header>
                                <Card.Meta>createdAt - username</Card.Meta>
                                <Card.Description>
                                    Lorem ipsum dolor sit amet
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column mobile={16} computer={4}>
                        <Card>
                            <Image src="https://place-hold.it/600x400&text=Image&fontsize=32" wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Title</Card.Header>
                                <Card.Meta>createdAt - username</Card.Meta>
                                <Card.Description>
                                    Lorem ipsum dolor sit amet
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column mobile={16} computer={4}>
                        <Card>
                            <Image src="https://place-hold.it/600x400&text=Image&fontsize=32" wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Title</Card.Header>
                                <Card.Meta>createdAt - username</Card.Meta>
                                <Card.Description>
                                    Lorem ipsum dolor sit amet
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column mobile={16} computer={4}>
                        <Card>
                            <Image src="https://place-hold.it/600x400&text=Image&fontsize=32" wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Title</Card.Header>
                                <Card.Meta>createdAt - username</Card.Meta>
                                <Card.Description>
                                    Lorem ipsum dolor sit amet
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid>
            </Responsive>
        </section>
    )
}

export default BlogList;
