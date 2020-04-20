from flask import url_for

from construction_projects import ProjectController


class ProjectJson:
    def __init__(self, project):
        self.project = project
    
    def __call__(self):
        """Implement class as callable to return the json"""
        if not self.project.id: #not yet flushed / available for client
            return {}
        ts = self.project.ts_created.isoformat()
        links = self.create_links()
        return {
            'id': self.project.id,
            'tsCreated': ts,
            'name': self.project.name,
            'description': self.project.description or '',
            'location': self.project.location or '',
            'links': links
        }
    
    def create_links(self):
        """Return link map for the object"""
        return {
            'delete': url_for('construction_projects.delete_project', projectId=self.project.id, _external=True),
            'save': url_for('construction_projects.save_project', projectId=self.project.id, _external=True),
            'saveCart': url_for('construction_projects.save_project_materials', projectId=self.project.id, _external=True) 
        }

    @classmethod
    def get_all_projects_as_json(cls, session):
        """Helper to pre hook this into db connector"""
        projects = ProjectController(session).get_projects()
        return [cls(p)() for p in projects]
