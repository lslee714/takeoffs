from flask import Blueprint

from .urls import register

MATERIAL_SELECTOR = Blueprint('material_selector', __name__, url_prefix='/material-selector')

register(MATERIAL_SELECTOR)
