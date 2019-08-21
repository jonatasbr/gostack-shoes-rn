import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import {
  Container,
  ItemView,
  ItemImage,
  ItemText,
  ItemPrice,
  ItemButton,
  ItemButtonText,
  ItemAmount,
  ItemAmountText,
} from './styles';

export default class Main extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  };

  renderProduct = ({ item }) => {
    return (
      <ItemView key={item.id}>
        <ItemImage source={{ uri: item.image }} />
        <ItemText>{item.title}</ItemText>
        <ItemPrice>{item.priceFormatted}</ItemPrice>
        <ItemButton>
          <ItemAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={18} />
            <ItemAmountText>3</ItemAmountText>
          </ItemAmount>
          <ItemButtonText>ADICIONAR</ItemButtonText>
        </ItemButton>
      </ItemView>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}
