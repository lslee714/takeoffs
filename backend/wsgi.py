from app import create_app

from configs import get_config

config = get_config('live')
app = create_app(config)