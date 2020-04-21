from flask import url_for

from app import app
from construction_projects import ProjectController

from ...material_selector.helpers import ProductJson

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
            'links': links,
            'cart': self.get_materials()
        }
    
    @classmethod
    def get_all_projects_as_json(cls, session):
        """Helper to pre hook this into db connector"""
        projects = ProjectController(session).get_projects()
        return [cls(p)() for p in projects]

    
    def create_links(self):
        """Return link map for the object"""
        additionalArgs = {'_scheme': 'https' } if app.config['ENV'] == 'production' else {}
        return {
            'delete': url_for('construction_projects.delete_project', projectId=self.project.id, _external=True, **additionalArgs),
            'save': url_for('construction_projects.save_project', projectId=self.project.id, _external=True, **additionalArgs),
            'saveCart': url_for('construction_projects.save_project_materials', projectId=self.project.id, _external=True, **additionalArgs) 
        }

    def get_materials(self):
        """Return the project's materials(cart) for json"""
        materials = self.project.materials
        return [ProductJson.from_material(material)() for material in materials]