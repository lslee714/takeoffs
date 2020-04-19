import React, { useEffect, Dispatch } from 'react';
import { useDispatch } from 'react-redux';

import MaterialSelectorActions from '../../../store/actions/material-selector';

import './Selector.scss';

const Selector = () => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(MaterialSelectorActions.getCategories());
  });

  return <div className="main">HELLO</div>;
};

export default Selector;
