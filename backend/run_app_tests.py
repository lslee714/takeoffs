from pathlib import Path
#Since flask requires the application context, run unittest inside the context of it
from unittest import defaultTestLoader, TextTestRunner

from configs import get_config

from app import create_app

if __name__ == '__main__':

    import argparse

    argParser = argparse.ArgumentParser(description='Run all application unittests within an app context')

    argParser.add_argument('--app-config', dest='config', nargs='?', choices=('debug', 'live'), default='debug',
                        help='The type of app config to run')
    args = argParser.parse_args()

    verbosity = 1 #Just use default verbosity

    appConfig = get_config(args.config)

    app = create_app(appConfig)
    with app.test_request_context() as appContext:
        discoveredTests = defaultTestLoader.discover(Path(__file__).parent)
        runner = TextTestRunner(verbosity=verbosity)
        runner.run(discoveredTests)