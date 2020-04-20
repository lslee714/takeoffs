from flask import render_template, request, jsonify
from flask_cors import cross_origin

from material_selector import MaterialController

from .helpers import CategoryJson, ProductJson

def register(blueprint):
    """Register the routes for the material selector/root"""

    @blueprint.route('/categories')
    @cross_origin()
    def get_categories():
        """Return the categories given pagination criteria"""
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
        # Trusting sort from API so far
        return jsonify({'categories': categories, 'total': total})        

    @blueprint.route('/products')
    @cross_origin()
    def get_products():
        """Return the products given the search query param"""
        queryParams = request.args
        if queryParams:
            args = {
                'categoryName': queryParams.get('category-name'),
            }
        else:
            args = {}
        # Taking the first 10 for now
        products = ProductJson.get_products(**args)[:10]
        return jsonify(products)
