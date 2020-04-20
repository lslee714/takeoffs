import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import CategoryProductItem from '../category-product-item/CategoryProductItem';
import { MaterialSelector } from '../../../../models';

import './CategoryProducts.scss';

const CategoryProducts = (props: {
  products: MaterialSelector.IMaterialProduct[];
}) => {
  return (
    <ListGroup className="embedded-list" variant="flush">
      {props.products.map((product: MaterialSelector.IMaterialProduct) => (
        <ListGroup.Item key={product.id} className="product">
          <CategoryProductItem product={product} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CategoryProducts;
