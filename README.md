# Takeoffs Demo App

### Project Scope

#### Project Epic:

Create an application allowing the user to:

- Create a construction project and add details like name, description, location and pictures
- Within a construction project, allow the user to select materials that utilizes the Takeoffs materials API
- Material selection should be feature rich, and it should include things like: searching, updating quantities, add/remove from cart

#### Technical Requirements:

- Sound architecture
- React w/ Typescript UI
- Flask backend

#### Project retro:

- I chose a mono-repo approach, this buys me a couple of things: a) API compatibility; and b) easy developer experience for a small one-man team.
- I did separate out the UI and backend into their own separate applications, i.e. I did not a the monolith approach. While I actually saw an argument _**for**_ a monolith (it's a simple application with limited purpose), I wanted to keep flexibility and scalability in mind. In addition, I admittedly do not have a ton of outside of work experience in setting up microservices, so it was a great learning opportunity. We'll see how this ends up!

###

## Frontend

### Written in React with Typescript, using create-react-app with Typescript

To serve locally, inside root project directory, run

```
//Production mode
start-frontend.sh

//Dev mode
//In the frontend/ directory
npm start
```

## Backend

(Assumed to be have python3.6+ and associated pip available in current working path)

<a href='https://docs.python.org/3.6/library/venv.html'>Here's how you can create a virtual environment in python</a>
<br>

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

#### For production, in docker, from root project directory

```
./start-backend.sh
```
