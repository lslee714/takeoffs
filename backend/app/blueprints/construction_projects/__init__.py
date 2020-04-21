from flask import Blueprint
from flask_cors import CORS

from .urls import register

CONSTRUCTION_PROJECTS = Blueprint('construction_projects', __name__, url_prefix='/construction-projects')
CORS(CONSTRUCTION_PROJECTS)

register(CONSTRUCTION_PROJECTS)
