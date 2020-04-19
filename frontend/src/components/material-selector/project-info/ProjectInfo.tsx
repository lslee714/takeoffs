import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Redirect } from 'react-router-dom';

import { IConstructionProject } from '../../../models/ConstructionProject';

const ProjectInfo: React.FC<{ project: IConstructionProject }> = (props: {
  project: IConstructionProject;
}) => {
  if (props.project) {
    return (
      <Jumbotron>
        <h1>{props.project.name}</h1>
      </Jumbotron>
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default ProjectInfo;
