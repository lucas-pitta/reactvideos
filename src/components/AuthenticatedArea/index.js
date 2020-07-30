import React, { Component } from 'react';
import { Photo, Container, Name } from './styles';

class AuthenticatedArea extends Component {
  constructor(props) {
    super(props);

    let name = localStorage.getItem('@pitta-flix/name');
    let imageUrl = localStorage.getItem('@pitta-flix/imageUrl');
    this.state = { name: name, imageUrl: imageUrl };
  };

  render() {
    return (
      <Container>
        <Photo src={this.state.imageUrl} />
        <Name>{this.state.name}</Name>
      </Container>
    );
  }
}

export default (AuthenticatedArea);