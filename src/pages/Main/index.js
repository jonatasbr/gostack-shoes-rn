import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
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

import * as CartActions from '../../store/modules/cart/actions';

export default function Main() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProduct({ item }) {
    return (
      <ItemView key={item.id}>
        <ItemImage source={{ uri: item.image }} />
        <ItemText>{item.title}</ItemText>
        <ItemPrice>{item.priceFormatted}</ItemPrice>
        <ItemButton onPress={() => handleAddProduct(item.id)}>
          <ItemAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={18} />
            <ItemAmountText>{amount[item.id] || 0}</ItemAmountText>
          </ItemAmount>
          <ItemButtonText>ADICIONAR</ItemButtonText>
        </ItemButton>
      </ItemView>
    );
  }

  return (
    <Container>
      <FlatList
        horizontal
        data={products}
        extraData={amount}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
      />
    </Container>
  );
}
