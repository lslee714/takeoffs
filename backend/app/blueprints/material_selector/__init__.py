from flask import Blueprint
from flask_cors import CORS

from .urls import register

MATERIAL_SELECTOR = Blueprint('material_selector', __name__, url_prefix='/material-selector')
CORS(MATERIAL_SELECTOR)

register(MATERIAL_SELECTOR)
