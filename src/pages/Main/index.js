import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
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

class Main extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  handleAddProduct = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  loadProducts = async () => {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  };

  renderProduct = ({ item }) => {
    //    const { amount } = this.props;

    return (
      <ItemView key={item.id}>
        <ItemImage source={{ uri: item.image }} />
        <ItemText>{item.title}</ItemText>
        <ItemPrice>{item.priceFormatted}</ItemPrice>
        <ItemButton onPress={() => this.handleAddProduct(item)}>
          <ItemAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={18} />
            <ItemAmountText>0</ItemAmountText>
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

// const mapStateToProps = state => ({
//   amount: state.cart.reduce((amount, product) => {
//     amount[product.id] = product.amount;
//     return amount;
//   }, {}),
// });

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  // mapStateToProps,
  mapDispatchToProps
)(Main);
