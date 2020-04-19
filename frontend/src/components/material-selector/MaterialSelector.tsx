import React from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProjectInfo from './project-info/ProjectInfo';
import { IConstructionProject } from '../../models/ConstructionProject';
import { IRootState } from '../../store/reducers';

function MaterialSelector() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const project: IConstructionProject = useSelector(
    (state: IRootState) => state.projects.byId[id]
  );
  return (
    <div>
      <ProjectInfo project={project} />
      <Container>
        <hr />
      </Container>
    </div>
  );
}

export default MaterialSelector;
