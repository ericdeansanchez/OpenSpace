import {Body, Button, Card, CardItem, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Text, Thumbnail} from 'native-base';
/*
// Calling this function will open Google for login.
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
    console.log(currentUser.user._user.displayName);
    // console.info(JSON.stringify(currentUser.toJSON()));
  } catch (e) {
    console.error(e);
  }
}
*/

import React, {Component} from 'react';
import {Image} from 'react-native';
import firebase from 'react-native-firebase'
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

export default class FooterTabsIconTextExample extends Component {
  render() {
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
                                    <Text>NativeBase</Text>
                                    <Text note>GeekyAnts</Text>
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
                                    <Text>4 Comments</Text>
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