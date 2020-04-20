import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';

import ProjectInfo from './project-info/ProjectInfo';
import Selector from './selector/Selector';

import { IConstructionProject } from '../../models/ConstructionProject';
import { IRootState } from '../../store/reducers';

import './MaterialSelector.scss';

function MaterialSelector() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const project: IConstructionProject = useSelector(
    (state: IRootState) => state.projects.byId[id]
  );
  if (project) {
    return (
      <div className="material-selector">
        <ProjectInfo project={project} />
        <Selector />
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
}

export default MaterialSelector;
