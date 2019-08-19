import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  background: #000;
  flex: 1;
  padding: 30px;
`;

export const ItemView = styled.View`
  background: #fff;
  padding: 10px;
  margin: 50px;
  border-radius: 4px;
  width: 240px;
`;

export const ItemImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ItemText = styled.Text`
  font-size: 16px;
`;

export const ItemPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ItemButton = styled.TouchableOpacity`
  background-color: #7459c1;
  margin-top: auto;
  border-radius: 4px;
  font-weight: bold;
  flex-direction: row;
  align-items: center;
`;

export const ItemButtonText = styled.Text`
  color: #fff;
  flex: 1;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
`;

export const ItemAmount = styled.View`
  padding: 5px;
  background: ${darken(0.05, '#7459c1')};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ItemAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;
