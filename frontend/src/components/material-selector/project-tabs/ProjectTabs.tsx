import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaShoppingCart } from 'react-icons/fa';

import OrderProject from '../order-project/OrderProject';

import './ProjectTabs.scss';

const ProjectTabs = () => {
  return (
    <Tabs defaultActiveKey="marketPlace" id="uncontrolled-tab-example">
      <Tab eventKey="summary" title="Summary" disabled />
      <Tab eventKey="floorPlans" title="Floor Plans" disabled />
      <Tab
        eventKey="marketPlace"
        title={
          <span>
            <FaShoppingCart className="marketplace-icon" />
            MarketPlace
          </span>
        }
      >
        <OrderProject />
      </Tab>
    </Tabs>
  );
};

export default ProjectTabs;
