from flask import render_template

def register(blueprint):
    """Register the routes for the material selector/root"""
    @blueprint.route('/')
    def index():
        """Root for the root blueprint"""
        return "Hello world"
        