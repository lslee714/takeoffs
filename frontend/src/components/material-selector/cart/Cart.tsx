import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

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
      <ListGroup>
        {itemsToShow.map((product: IMaterialProduct) => (
          <ListGroup.Item key={product.id} className="product">
            {product.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Cart;
