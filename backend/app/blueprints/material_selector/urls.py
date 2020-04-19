from flask import render_template, request

from material_selector import MaterialController

def register(blueprint):
    """Register the routes for the material selector/root"""
    @blueprint.route('/')
    def get_categories():
        """Root for the root blueprint"""
        controller = MaterialController()
        categories = controller.get_categories()
        print("resposne!", categories)
        return "Hello world"
        