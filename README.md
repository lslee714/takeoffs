# Takeoffs Demo App

## Project Scope

#### Project Epic:

Create an application allowing the user to:

- Create a construction project and add details like name, description, location and pictures
- Within a construction project, allow the user to select materials that utilizes the Takeoffs materials API
- Material selection should be feature rich, and it should include things like: searching, updating quantities, add/remove from cart

#### Technical Requirements:

- Sound architecture
- React w/ Typescript UI
- Flask backend

#### Project retro notes:

- I chose a mono-repo (but multi-app) approach, this buys me a couple of things: a) API compatibility; and b) easy developer experience for a small one-man team.
- I separated out the UI and backend into their own separate applications, i.e. I did not create a monolith. While I actually saw an argument _**for**_ a monolith (it's a simple application with limited purpose -- and would have been a lot easier!), I wanted to keep flexibility and scalability in mind. In addition, I admittedly do not have a ton of outside of work experience in setting up microservices, so it is a great learning opportunity. We'll see how this ends up!
- I used NGINX to serve the frontend; it's a widely accepted static content server in the community.
- I used gunicorn to serve the flask backend; it's also widely accepted as a Python WSGI HTTP server and I'm familiar with it.
- I added a redux-observable layer for my UI state management; it's a pretty heavy, all purpose Redux tool for React that allows me to use rxjs with Observables, which is where Javascript is heading more and more towards! More info in frontend/src/store
- I don't follow snake_case for my local variables in Python; I prefer camelCase for it, so those are intentional. But generally followed PEP8 otherwise.
- I didn't utilize Flask_SQLAlchemy as that marries the ORM layer to the Application layer, which makes the app a little more rigid.
- Added sass as css preprocessor, regular css was getting too clunky

#### Shortcuts I took so far (mostly due to time constraints)

- Very happy pathed..
- Using sqlite, hosting a full microserviced application in the cloud w/ a database also isnt trivial
- No frontend form validation
- Testing lacking
- Little scss methodology, mostly setting values empirically

## Frontend

### Written in React with Typescript, using create-react-app with Typescript

To serve locally, inside root project directory, run

#### For dev mode

```
//In the frontend/ directory
npm start
```

#### For Production build

```
start-frontend.sh
```

## Backend

(Assumed to be have python3.6+ and associated pip available in current working path)

<a href='https://docs.python.org/3.6/library/venv.html'>Here's how you can create a virtual environment in python</a>

### Setting up Application for development

```
$ ./setup.sh
//Create and adjust an environment file (i.e. env.sh) in backend directory (/some/path/to/takeoffs/backend)
//Recommend using env.sh.template as a boilerplate
//Example of database uri: "[sql db type]:///path/to/db", e.g. "sqlite:////$(pwd)/test.db"
$ source env.sh (or file from step #2)
$ alembic upgrade heads
```

### Running the application

#### For dev mode

```
$ source env.sh (If environment not loaded)
*$ python run_app_tests.py
(runs unittest in app context for Flask-based unittests, if applicable) OR $ python -m unittest

$ python run.py
```

\*optional

#### For production, from root project directory

```
./start-backend.sh
```
