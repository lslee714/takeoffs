from .debug import DebugConfig
from .production import ProductionConfig


def get_config(option):
    """ Return the config given an option"""
    configMapping = {
        'debug': DebugConfig,
        'live': ProductionConfig
    }
    config = configMapping.get(option)
    if not config:
        config = DebugConfig

    return config

