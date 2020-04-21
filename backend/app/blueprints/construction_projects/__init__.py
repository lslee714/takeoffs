from flask import Blueprint

from .urls import register

CONSTRUCTION_PROJECTS = Blueprint('construction_projects', __name__, url_prefix='/construction-projects')

register(CONSTRUCTION_PROJECTS)
