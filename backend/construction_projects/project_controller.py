from models import Project, Material

class ProjectController:

    def __init__(self, session):
        self.session = session
    
    def get_projects(self):
        return self.session.query(Project).order_by(Project.ts_created.desc()).all()

    def delete_project(self, projectId):
        self.session.query(Project).filter(Project.id==projectId).delete()

    def set_project_cart(self, projectId, cart):
        project = self.session.query(Project).get(projectId)        
        project.materials = []
        #Flush to get the cascade delete from deassociation to happen
        self.session.flush()
        cartMaterials = [Material(api_id=cartApiId, quantity=quantity) for cartApiId, quantity in cart.items()]
        project.materials = cartMaterials