from flask import jsonify
from flask_cors import cross_origin


def register(blueprint):
    """Register the routes for the blueprint"""

    @blueprint.route('/')
    @cross_origin()
    def index():
        """Root for the constructionProjects blueprint"""
        response = jsonify({'message': 'Hello world from construction projects'})
        return response

            
