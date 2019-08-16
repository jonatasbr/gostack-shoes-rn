import React from 'react';
import foto from '../../images/tenis1.jpg';

import { Container, ShoesView, ShoesImage } from './styles';

export default function Main() {
  return (
    <>
      <Container>
        <ShoesView>
          <ShoesImage source={foto} />
        </ShoesView>
      </Container>
    </>
  );
}
