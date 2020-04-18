import os

class Config:
    """Base configuration settings for flask"""
    SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URI']
