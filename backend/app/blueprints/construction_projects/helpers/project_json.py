

class ProjectJson:
    def __init__(self, project):
        self.project = project
    
    def __call__(self):
        if not self.project.id: #not yet flushed / available for client
            return {}
        ts = self.project.ts_created.isoformat()
        return {
            'id': self.project.id,
            'tsCreated': ts,
            'name': self.project.name,
            'description': self.project.description or '',
            'location': self.project.location or ''
        }