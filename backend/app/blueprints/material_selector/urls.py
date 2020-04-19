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
        queryParams = request.args
        if queryParams:
            args = {
                'page': queryParams.get('page'),
                'itemsPerPage': queryParams.get('items-per-page')
            }
        else:
            args = {}
        categories = CategoryJson.get_categories(**args)
        total = MaterialController().get_total()
        # Trusting sort from API s o far
        return jsonify({'categories': categories, 'total': total})        