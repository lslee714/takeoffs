from flask import Blueprint

from .urls import register

CONSTRUCTION_PROJECTS = Blueprint('construction_projects', __name__)

register(CONSTRUCTION_PROJECTS)
