import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

import { IConstructionProject } from '../../../models/ConstructionProject';
import { IRootState } from '../../../store/reducers';

function ExistingProjects() {
  const existingProjects: IConstructionProject[] = useSelector(
    (state: IRootState) => {
      const projects = state.projects;
      const sortedProjects: IConstructionProject[] = [];
      projects.sorted.forEach((id) => sortedProjects.push(projects.byId[id]));
      return sortedProjects;
    }
  );

  return (
    <div>
      <h3>Existing Projects</h3>
      <ListGroup>
        {existingProjects.map((project: IConstructionProject) => (
          <ListGroup.Item key={project.id} action>
            {project.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default ExistingProjects;
