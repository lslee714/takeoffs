from flask import render_template, request
from flask_cors import cross_origin

from material_selector import MaterialController

def register(blueprint):
    """Register the routes for the material selector/root"""
    @blueprint.route('/')
    @cross_origin()
    def get_categories():
        """Root for the root blueprint"""
        controller = MaterialController()
        categories = controller.get_categories()
        print("resposne!", categories)
        return "Hello world"
        