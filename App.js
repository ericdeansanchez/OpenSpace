import {Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Switch, Text} from 'native-base';
import React, {Component} from 'react';

export default class ListIconExample extends Component {
  render() {
    return (
        <Container><Header /><Content><ListItem icon><Left><Button style = {
          {
            backgroundColor: '#FF9501'
          }
        }><Icon active name = 'plane' /></Button>
            </Left><Body>
        <Text>Airplane Mode</Text>
            </Body><Right>
        <Switch value =
         {
           false
         } />
            </Right>
        </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="wifi" />
        </Button>
            </Left><Body><Text>Wi -
        Fi</Text>
            </Body><Right><Text>
            GeekyAnts</Text>
              <Icon active name="arrow-forward" />
        </Right>
          </ListItem><ListItem icon><Left><Button style = {
          {
            backgroundColor: '#007AFF'
          }
        }><Icon active name = 'bluetooth' /></Button>
            </Left><Body>
        <Text>Bluetooth</Text>
            </Body><Right>
        <Text>On</Text>
              <Icon active name="arrow-forward" />
        </Right>
          </ListItem></Content>
      </Container>);
  }
}