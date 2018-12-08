import { Body, Button, Card, CardItem, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Text, Thumbnail } from 'native-base';

export const googleLogin =
    async () => {
        try {
            // Add any configuration settings here:
            await GoogleSignin.configure();

            const data = await GoogleSignin.signIn();

            // create a new firebase credential with the token
            const credential = firebase.auth.GoogleAuthProvider.credential(
                data.idToken, data.accessToken)
            // login with credential
            const currentUser = await firebase.auth().signInWithCredential(credential);
            console.log(currentUser.user);
            // console.info(JSON.stringify(currentUser.toJSON()));
        } catch (e) {
            console.error(e);
        }
    }

import React, { Component } from 'react';
import { Image } from 'react-native';
import firebase from 'react-native-firebase'
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

const googlePlacesApiKey = 'AIzaSyBHk6KnouKAKNFbTnisDii1GBjtOnyCHuo';
const lat = 37.87156239999999;
const lng = -122.2581763;
const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${
    googlePlacesApiKey}&location=${lat},${
    lng}&radius=500&type=library&keyword=UC Berkeley`;


export default class FooterTabsIconTextExample extends Component {
    fetchSpace() {
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        googleLogin();
        this.fetchSpace();
        return (
            <Container>
                <Header />

                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={
                                    {
                                        uri:
                                            'http://www.lib.berkeley.edu/hours/system/pictures/123/medium/doe.jpg?1309378443'
                                    }} />
                                <Body>
                                    <Text>Doe Memorial Library</Text>
                                    <Text note></Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={
                                {
                                    uri:
                                        'http://www.lib.berkeley.edu/hours/system/pictures/123/medium/doe.jpg?1309378443'
                                }} style={
                                    { height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name='thumbs-up' />
                                    <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text>4 Notifs</Text>
                                </Button>
                            </Body>
                            <Right>
                                <Text>11h ago</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button vertical>
                            <Icon name='home' />
                            <Text>Home</Text>
                        </Button>
                        <Button vertical>
                            <Icon name='pin' />
                            <Text>Map</Text>
                        </Button>
                        <Button vertical>
                            <Icon name='notifications' />
                            <Text>Notifs</Text>
                        </Button>
                        <Button vertical>
                            <Icon name='chatboxes' />
                            <Text>Message</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
