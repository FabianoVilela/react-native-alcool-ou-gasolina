/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
import { 
  Button,
  Body,
  Card,
  CardItem,
  Container,
  Content,
  Form,
  Header,
  Item,
  Input,
  Spinner,
  Text,
  Title,
  Icon,
  InputGroup,
} from 'native-base'

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {
  state = {
    alcoholPrice: '',
    gasolinePrice: '',
    result: '',
    loading: false,
  }

  calc = () => {
    const alcoholPrice = parseFloat(this.state.alcoholPrice).toFixed(2)
    const gasolinePrice = parseFloat(this.state.gasolinePrice).toFixed(2)

    this.setState({ 
      result: (alcoholPrice / gasolinePrice) <= 0.7 ? 'Álcool' : 'Gasolina'
    })
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <InputGroup>
                  <Icon name="local-gas-station" size={30} type='MaterialIcons' style={{color: '#333'}}/>
                  <Input
                    placeholder="Preço alcóol" 
                    value={this.state.alcoholPrice} 
                    onChangeText={text => this.setState({ alcoholPrice: text })} />
                </InputGroup>
                <InputGroup>
                  <Icon name="local-gas-station" size={30} type='MaterialIcons' style={{color: '#333'}}/>
                  <Input
                    placeholder="Preço gasolina" 
                    value={this.state.gasolinePrice} 
                    onChangeText={text => this.setState({ gasolinePrice: text })} />
                </InputGroup>
                <Button block iconLeft style={{marginTop: 20}} onPress={this.calc}>
                  <Icon active name="local-gas-station" type='MaterialIcons' />
                  <Text>Calcular</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text style={{ alignSelf: "center" }}>{ this.state.result || 'Devo abastecer com?' }</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}