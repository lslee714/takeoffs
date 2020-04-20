from flask import jsonify, request
from flask_cors import cross_origin

from app import session
from construction_projects import ProjectController
from models import Project

from .helpers import ProjectJson

def register(blueprint):
    """Register the routes for the blueprint"""

    @blueprint.route('/')
    @cross_origin()
    def get_projects():
        """Returns the existing projects, sorted by TS created"""
        projectJsons = ProjectJson.get_all_projects_as_json(session)
        return jsonify(projectJsons)

    @blueprint.route('/', methods=['POST'])
    @cross_origin()
    def create_project():
        """Create a project and return its ID"""
        projectData = request.get_json();
        # Remove placeholder ID
        projectData.pop('id')
        newProject = Project(**projectData)
        session.add(newProject)
        session.commit()
        return jsonify(ProjectJson(newProject)())
    
    @blueprint.route('/<projectId>', methods=['DELETE'])
    @cross_origin()
    def delete_project(projectId):
        """Delete a project and return the rest"""
        projectController = ProjectController(session)
        projectController.delete_project(projectId)
        session.commit()
        projectJsons = ProjectJson.get_all_projects_as_json(session)
        return jsonify(projectJsons)
    
    @blueprint.route('/<projectId>', methods=['PATCH'])
    @cross_origin()
    def save_project(projectId):
        """Placeholder to allow patching a project"""
        return jsonify({})
    
    @blueprint.route('/<projectId>/materials', methods=['POST'])
    @cross_origin()
    def save_project_materials(projectId):
        """Create a project's materials (cart)"""
        return jsonify({})
