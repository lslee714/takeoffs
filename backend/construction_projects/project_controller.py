from models import Project

class ProjectController:

    def __init__(self, session):
        self.session = session
    
    def get_projects(self):
        return self.session.query(Project).order_by(Project.ts_created.desc()).all()

    def delete_project(self, projectId):
        self.session.query(Project).filter(Project.id==projectId).delete()        