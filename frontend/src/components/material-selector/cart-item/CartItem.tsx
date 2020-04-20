import React, { useState, Dispatch } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl';
import { MdRemoveCircle } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { IMaterialProduct } from '../../../models/MaterialSelector';

import './CartItem.scss';
import MaterialSelectorActions from '../../../store/actions/material-selector';

const CartItem = (props: { product: IMaterialProduct }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch: Dispatch<any> = useDispatch();
  const product: IMaterialProduct = props.product;
  return (
    <Card className="item">
      <Card.Title className="title">
        {product.storeUrl ? (
          <a href={product.storeUrl} target="_blank">
            {product.name}
          </a>
        ) : (
          <div>{product.name}</div>
        )}
        <MdRemoveCircle
          className="remove"
          onClick={(e) =>
            dispatch(MaterialSelectorActions.unshowInCart(product.id))
          }
        />
      </Card.Title>
      {product.imageUrl ? (
        <Card.Img src={product.imageUrl} className="product-picture" />
      ) : (
        ''
      )}
      <footer className="footer">
        <div className="total">
          $ {Math.round(quantity * product.price * 100) / 100}
        </div>
        <FormControl
          type="number"
          min="0"
          defaultValue={quantity}
          onChange={
            // Any should be FormControlElement except it doesnt seem to be exported by react..
            (e: React.FormEvent<any>) => {
              if (e.currentTarget) {
                setQuantity(e.currentTarget.value);
              }
            }
          }
        />
        <Button variant="primary" className="add-item float-right">
          Add
        </Button>
      </footer>
    </Card>
  );
};

export default CartItem;
