import React, { useEffect, Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  IMaterialCategory,
  IMaterialProduct,
} from '../../../../models/MaterialSelector';
import MaterialSelectorActions from '../../../../store/actions/material-selector';
import { IRootState } from '../../../../store/reducers';
import CategoryProducts from '../category-products/CategoryProducts';

// Props is actually  { data: IMaterialCategory}
// But passing this as component into SelectorTable
// Doesn't allow passing in props manually
const SelectorTableRow = (props: any) => {
  const category: IMaterialCategory = props.data;
  const products: IMaterialProduct[] = useSelector(
    (state: IRootState) =>
      state.materialSelector.products.byCategoryId[category.id]
  );
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(MaterialSelectorActions.getProducts(category));
  }, [category]);

  if (products) {
    return (
      <div className="embedded-row">
        <CategoryProducts products={products} />
      </div>
    );
  } else {
    return <div className="embedded-row" />;
  }
};

export default SelectorTableRow;
