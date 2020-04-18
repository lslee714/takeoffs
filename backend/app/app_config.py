import os

class AppConfig:
    """Configurations specific to the application"""
    BASE_UPLOAD_PATH = os.environ.get('BASE_UPLOAD_PATH', 'temp')