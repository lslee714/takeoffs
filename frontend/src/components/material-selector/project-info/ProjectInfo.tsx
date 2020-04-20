import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { FaArrowLeft } from 'react-icons/fa';

import AdditionalProjectInfo from '../additional-project-info/AdditionalProjectInfo';
import { IConstructionProject } from '../../../models/ConstructionProject';
import ProjectTabs from '../project-tabs/ProjectTabs';

import './ProjectInfo.scss';

const ProjectInfo: React.FC<{ project: IConstructionProject }> = (props: {
  project: IConstructionProject;
}) => {
  return (
    <Jumbotron className="infotron">
      <div className="pad">
        <div className="project-name">
          <a className="prev-arrow" href="/">
            <FaArrowLeft size={'2em'} />
          </a>
          <h2>{props.project.name}</h2>
        </div>
        <AdditionalProjectInfo />
      </div>
      <div className="padless">
        <ProjectTabs project={props.project} />
      </div>
    </Jumbotron>
  );
};

export default ProjectInfo;
