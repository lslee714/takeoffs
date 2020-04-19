from flask import url_for

from construction_projects import ProjectController


class ProjectJson:
    def __init__(self, project):
        self.project = project
    
    def __call__(self):
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
        return {
            'delete': url_for('construction_projects.delete_project', projectId=self.project.id, _external=True)
        }

    @classmethod
    def get_all_projects_as_json(cls, session):
        projects = ProjectController(session).get_projects()
        return list(map(lambda p: ProjectJson(p)(), projects))
