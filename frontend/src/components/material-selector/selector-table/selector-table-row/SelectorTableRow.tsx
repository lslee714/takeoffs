import React, { useEffect, Dispatch } from 'react';
import { useDispatch } from 'react-redux';

import { IMaterialCategory } from '../../../../models/MaterialSelector';
import MaterialSelectorActions from '../../../../store/actions/material-selector';

// Props is actually  { data: IMaterialCategory}
// But passing this as component into SelectorTable
// Doesn't allow passing in props manually
const SelectorTableRow = (props: any) => {
  const category: IMaterialCategory = props.data;
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(MaterialSelectorActions.getProducts(category));
  }, [category]);

  const materialCategory: IMaterialCategory = props.data;
  return <div>{materialCategory.name}</div>;
};

export default SelectorTableRow;
