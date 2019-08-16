import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';
import logo from '../../images/logo.png';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo source={logo} />

        <BasketContainer>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>3</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
