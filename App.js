import {Body, Button, Container, Content, Header, Icon, Left, Right, Segment, Text, Title} from 'native-base';
import React, {Component} from 'react';
import firebase from 'react-native-firebase'
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

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

export default class SegmentOutsideHeaderExample extends Component {
  render() {
    googleLogin();
    return (
        <Container><Header hasSegment><Left><Button transparent>
        <Icon name = 'arrow-back' /></Button>
                    </Left><Body>
        <Title>Segments</Title>
                    </Body><Right>
        <Button transparent><Icon name = 'search' />
        </Button>
                    </Right>
        </Header>
                <Segment>
                    <Button first>
                        <Text>Puppies</Text>
        </Button>
                    <Button>
                        <Text>Kittens</Text>
        </Button>
                    <Button last active>
                        <Text>Cubs</Text>
        </Button>
                </Segment><Content padder>
        <Text>Awesome segment</Text>
                </Content>
        </Container>
);
  }
}