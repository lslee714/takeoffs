from flask import render_template, request, jsonify
from flask_cors import cross_origin

from material_selector import MaterialController

from .helpers import CategoryJson

def register(blueprint):
    """Register the routes for the material selector/root"""
    @blueprint.route('/')
    @cross_origin()
    def get_categories():
        """Root for the root blueprint"""
        categories = CategoryJson.get_categories()
        return jsonify(categories)        