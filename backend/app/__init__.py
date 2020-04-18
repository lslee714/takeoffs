from flask import Flask
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

session = None
app = None

def create_app(config):
    global app
    global session
    
    app = Flask(__name__)
    app.config.from_object(config)

    engine = create_engine(app.config['SQLALCHEMY_DATABASE_URI'], connect_args={'check_same_thread': False})
    Session = sessionmaker(bind=engine)
    session = Session()
    register_blueprints(app)
    return app

def register_blueprints(app):
    """Register the blueprints"""
    #have to import to get order proper for db to be initialized :(
    from .blueprints import CONSTRUCTION_PROJECTS, MATERIAL_SELECTOR

    blueprints = [CONSTRUCTION_PROJECTS, MATERIAL_SELECTOR]
    for bp in blueprints:
        app.register_blueprint(bp)