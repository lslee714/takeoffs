import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { FaArrowLeft } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';

import { IConstructionProject } from '../../../models/ConstructionProject';

import './ProjectInfo.css';

const ProjectInfo: React.FC<{ project: IConstructionProject }> = (props: {
  project: IConstructionProject;
}) => {
  if (props.project) {
    return (
      <Jumbotron className="infotron">
        <div className="project-name">
          <a className="prev-arrow" href="/">
            <FaArrowLeft size={'2em'} />
          </a>
          <h2>{props.project.name}</h2>
        </div>
      </Jumbotron>
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default ProjectInfo;
