from flask import jsonify, request
from flask_cors import cross_origin

from app import session
from models import Project

from .helpers import ProjectJson

def register(blueprint):
    """Register the routes for the blueprint"""

    @blueprint.route('/')
    @cross_origin()
    def get_projects():
        """Returns the existing projects, sorted by TS created"""
        projects = session.query(Project).order_by(Project.ts_created.desc()).all()
        projectJsons = list(map(lambda p: ProjectJson(p)(), projects))
        return jsonify(projectJsons)

    @blueprint.route('/', methods=['POST'])
    @cross_origin()
    def create_project():
        """Create a project and return its ID"""
        print("NEW POST", request.json)
        return jsonify({})
    
            
