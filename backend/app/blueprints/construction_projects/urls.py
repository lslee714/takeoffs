from flask import jsonify


def register(blueprint):
    """Register the routes for the blueprint"""

    @blueprint.route('/')
    def index():
        """Root for the constructionProjects blueprint"""
        return jsonify({'message': 'Hello world from construction projects'})
            
