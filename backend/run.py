from app import create_app

from configs import get_config

if __name__ == '__main__':
    import argparse

    argParser = argparse.ArgumentParser(description='Run the Takeoffs API backend')

    argParser.add_argument('--config', dest='config', nargs='?', choices=('debug', 'live'), default='debug',
                           help='The type of configuration to run the service in')

    argParser.add_argument('--host', dest='host', nargs='?', default='localhost',
                           help='The host IP to run the service in')

    argParser.add_argument('--port', dest='port', nargs='?', default='8000',
                           help='The port to run the service in')


    args = argParser.parse_args()

    appConfig = get_config(args.config)
    host = args.host
    port = args.port
    app = create_app(config=appConfig)
    app.run(host=host, port=port)