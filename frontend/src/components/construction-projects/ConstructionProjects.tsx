import React from 'react';
import Container from 'react-bootstrap/Container';

import ExistingProjects from './existing-projects/ExistingProjects';
import ProjectForm from './project-form/ProjectForm';

function ConstructionProjects() {
  return (
    <Container>
      <ExistingProjects />
      <hr />
      <ProjectForm />
    </Container>
  );
}

export default ConstructionProjects;
