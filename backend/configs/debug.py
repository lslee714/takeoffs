from .base import Config

class DebugConfig(Config):
    """Configuration for debug mode"""
    ENV = 'development'
    DEBUG = True
