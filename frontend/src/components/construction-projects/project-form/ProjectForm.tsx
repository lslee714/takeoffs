import React, { Dispatch, useState, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { IConstructionProject } from '../../../models/ConstructionProject';
import ConstructionProjectsActions from '../../../store/actions/construction-projects';

import './ProjectForm.scss';

function ProjectForm() {
  const dispatch: Dispatch<any> = useDispatch();

  const [project, setProject]: [
    IConstructionProject,
    Dispatch<SetStateAction<IConstructionProject>>
  ] = useState({ id: 0, name: '', location: '' });

  return (
    <div>
      <h3>Create a new project</h3>
      <Form>
        <Form.Group controlId="projectName">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="What's the name of the project?"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const val = e.target.value;
              setProject((prevState) => {
                return {
                  ...prevState,
                  name: val,
                };
              });
            }}
          />
        </Form.Group>

        <Form.Group controlId="projectDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Describe this project"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const val = e.target.value;
              setProject((prevState) => {
                return {
                  ...prevState,
                  description: val,
                };
              });
            }}
          />
        </Form.Group>
        <Form.Group controlId="projectLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Where is this project?"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const val = e.target.value;
              setProject((prevState) => {
                return {
                  ...prevState,
                  location: val,
                };
              });
            }}
          />
        </Form.Group>
        <Button
          className="float-right"
          variant="primary"
          type="button"
          disabled={!project.name}
          onClick={() =>
            dispatch(ConstructionProjectsActions.createProject(project))
          }
        >
          Create
        </Button>
      </Form>
    </div>
  );
}

export default ProjectForm;
