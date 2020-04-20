import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaShoppingCart } from 'react-icons/fa';

import { ConstructionProject } from '../../../models';
import OrderProject from '../order-project/OrderProject';

import './ProjectTabs.scss';

const ProjectTabs = (props: {
  project: ConstructionProject.IConstructionProject;
}) => {
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
        <OrderProject project={props.project} />
      </Tab>
    </Tabs>
  );
};

export default ProjectTabs;
