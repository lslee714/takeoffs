# Takeoffs Demo App

## Frontend

### Written in React with Typescript, using create-react-app with Typescript

To serve locally run:

```
//Production mode
start-frontend.sh

//Dev mode
//In the frontend/ directory
npm start
```

For development mode: npm start

Visit: localhost in your browser

## Backend

(Assumed to be have python3.6+ and associated pip available in current working path)
<br>
<br>
<a href='https://docs.python.org/3.6/library/venv.html'>Here's how you can create a virtual environment in python</a>
<br>
<br>

<h3>Setting up Application</h3>
<ol>
    <li>$ ./setup.sh</li>
    <li>Create and adjust an environment file (i.e. env.sh) in root directory 
    (/some/path/to/takeoffs/backend) 
    Recommend using env.sh.template as a boilerplate
    Example of database uri: "[sql db type]:///path/to/db", e.g. "sqlite:////$(pwd)/test.db"
    <li>$ source env.sh (or file from step #2)</li>
    <li>$ alembic upgrade heads</li>
</ol>

<h3>Running the application</h3>
<ol>
    <li>$ source env.sh (If environment not loaded) 
    <li> <strong>*</strong>  $ python run_app_tests.py 
        (runs unittest in app context) OR $ python -m unittest (but that will fail on some app unittests) 
    </li>
    <li>$ python run.py</li>
</ol>
