import React, { Dispatch } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector, useDispatch } from 'react-redux';
import { TiDeleteOutline } from 'react-icons/ti';

import './ExistingProjects.css';

import { IConstructionProject } from '../../../models/ConstructionProject';
import { IRootState } from '../../../store/reducers';
import ConstructionProjectsActions from '../../../store/actions/construction-projects';

function ExistingProjects() {
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
      <h3>Existing Projects</h3>
      <ListGroup>
        {existingProjects.map((project: IConstructionProject) => (
          <ListGroup.Item key={project.id} action>
            {project.name}
            <a
              className="float-right"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
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
            >
              <TiDeleteOutline
                size={'2em'}
                className="float-right delete-icon"
              />
            </a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default ExistingProjects;
