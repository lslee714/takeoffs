import React, { Dispatch } from 'react';
import { useHistory } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector, useDispatch } from 'react-redux';
import { TiDeleteOutline } from 'react-icons/ti';

import { IConstructionProject } from '../../../models/ConstructionProject';
import { IRootState } from '../../../store/reducers';
import ConstructionProjectsActions from '../../../store/actions/construction-projects';

import './ExistingProjects.scss';

function ExistingProjects() {
  const history = useHistory();
  const dispatch: Dispatch<any> = useDispatch();
  const existingProjects: IConstructionProject[] = useSelector(
    (state: IRootState) => {
      const projects = state.projects;
      const sortedProjects: IConstructionProject[] = [];
      projects.sorted.forEach((id) => sortedProjects.push(projects.byId[id]));
      return sortedProjects;
    }
  );

  if (!existingProjects.length) {
    return <div />;
  }
  return (
    <div>
      <h3>Existing Projects, click to view material selection</h3>
      <ListGroup>
        {existingProjects.map((project: IConstructionProject) => (
          <ListGroup.Item
            key={project.id}
            action
            onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
              history.push(`/material-selector/${project.id}`)
            }
          >
            {project.name}
            {project.description ? ` - ${project.description}` : ''}
            {project.location ? ` - ${project.location}` : ''}
            <TiDeleteOutline
              size={'2em'}
              className="float-right delete-icon"
              onClick={(e: React.MouseEvent<SVGElement, MouseEvent>) => {
                e.stopPropagation();
                // Should always have it at this point, but compiler isnt smart enough
                if (project.links) {
                  return dispatch(
                    ConstructionProjectsActions.deleteProject({
                      id: project.id,
                      link: project.links.delete,
                    })
                  );
                }
              }}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default ExistingProjects;
