import React from 'react';
import { useSelector } from 'react-redux';

import CartItem from '../cart-item/CartItem';
import { IMaterialProduct } from '../../../models/MaterialSelector';
import { IRootState } from '../../../store/reducers';

import './Cart.scss';

const Cart = () => {
  const itemsToShow: IMaterialProduct[] = useSelector((state: IRootState) => {
    const idsToShow = state.materialSelector.cart.shown;
    const items: IMaterialProduct[] = [];
    idsToShow.forEach((id: string) =>
      items.push(state.materialSelector.products.byId[id])
    );
    return items;
  });

  return (
    <div className="cart">
      <div className="header-container">
        <h3 className="header">Shopping Cart</h3>
      </div>
      {itemsToShow.map((product: IMaterialProduct) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Cart;
