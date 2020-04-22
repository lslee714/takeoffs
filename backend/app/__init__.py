import os

from flask import Flask
from flask_cors import CORS
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

session = None
app = None

def create_app(config):
    global app
    global session
    
    app = Flask(__name__)
    app.config.from_object(config)
    CORS(app)
    sqlAlchemyUriEnvVar = 'SQLALCHEMY_DATABASE_URI'
    databaseUri = os.environ.get(sqlAlchemyUriEnvVar)
    additionalArgs = {'connect_args': {'check_same_thread': False} } if databaseUri.startswith('sqlite') else {}    
    engine = create_engine(app.config['SQLALCHEMY_DATABASE_URI'], **additionalArgs)
    Session = sessionmaker(bind=engine)
    session = Session()
    register_blueprints(app)
    app.url_map.strict_slashes = False
    return app

def register_blueprints(app):
    """Register the blueprints"""
    #have to import to get order proper for db to be initialized :(
    from .blueprints import CONSTRUCTION_PROJECTS, MATERIAL_SELECTOR

    blueprints = [CONSTRUCTION_PROJECTS, MATERIAL_SELECTOR]
    for bp in blueprints:
        app.register_blueprint(bp)