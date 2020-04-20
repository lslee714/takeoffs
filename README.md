# Takeoffs Demo App

## Project Details

#### Project Epic:

Create an application allowing the user to:

- Create a construction project and add details like name, description, location and pictures
- Within a construction project, allow the user to select materials that utilizes the Takeoffs materials API
- Material selection should be feature rich, and it should include things like: searching, updating quantities, add/remove from cart

#### Project Technical Requirements:

- Sound architecture
- React w/ Typescript UI
- Flask backend
- Relational Database, hopefully Postgres (punting until I have time to set it up in the cloud)

#### Project retro notes:

- Not knowing the data very well, I did my best to match the story of "let users create projects and allow adding items to it" with the UX recommendations/wireframes. I realize this wasn't the full ask of the challenge/requirement, but I took the "fill in the requirements yourself" part in full stride, perhaps (but hopefully not) too far :D
- I did have a bunch of questions that came up as I delved deeper; however, given the time constraints and it being the weekend, I decided to fill the blanks in myself. I hope that wasn't to my detriment.
- I chose a mono-repo (but multi-app) approach, this buys me a couple of things: a) API compatibility; and b) easy developer experience for a small one-man team.
- I separated out the UI and backend into their own separate applications, i.e. I did not create a monolith. While I actually saw an argument _**for**_ a monolith (it's a simple application with limited purpose -- and would have been a lot easier!), I wanted to keep flexibility and scalability in mind. In addition, I admittedly do not have a ton of outside of work experience in setting up microservices, so it is a great learning opportunity. We'll see how this ends up!
- I can see the argument to separate the one backend service into two separate microservices (project and materials); that way, if one goes down, the other doesnt have to necessarily.
- I used NGINX to serve the frontend; it's a widely accepted static content server in the community.
- I used gunicorn to serve the flask backend; it's also widely accepted as a Python WSGI HTTP server and I'm familiar with it.
- I added a redux-observable layer for my UI state management; it's a pretty heavy, all purpose Redux tool for React that allows me to use rxjs with Observables, which is where Javascript is heading more and more towards! More info in frontend/src/store
- I don't follow snake_case for my local variables in Python; I prefer camelCase for it, so those are intentional. But generally followed PEP8 otherwise.
- I didn't utilize Flask_SQLAlchemy as that marries the ORM layer to the Application layer, which would make the app a little more rigid.
- Added sass as css preprocessor, regular css was getting too clunky
- There's some repetitive "flow" involved in the front end for both projects and material selector; could likely be abstracted out and even maybe into a utility-like scaffold
- All in all, I'm pretty happy with the application so far. Other than the shortcuts listed below, I believe the code is "solid" and the architecture/codebase would scale well to growth, both in complexity and number of members. If the team got large (10+ people), then it's probably worth re-visiting the mono-repo strategy, luckily I've separated the code into at least the front/backends as well as having blueprints in the backend.

#### Shortcuts I took so far (mostly due to time constraints)

- No API discovery/gateway tool, instead, I just have the urls as environment variables or even worse.. in-code variables. Hope to fix.
- No "user" / authentication. I've admittedly only done this professionally so punted on it for now.
- "Caveman" orchestration (my own script rather than something like docker compose); I want to set up kubernetes with it, ambitiously!
- The application is very happy pathed, but I think I did a good job of at least silencing/hiding (i.e. still useable) the errors.
- I punted (so far) on the location/searching aspect.. I regret this decision as when I re-read the challenge for the fifth or sixth time, it seems like it is a big part of the challenge; however, when playing with the API, I had difficulty getting results to come up given productName/location.
- Using sqlite, hosting a full microserviced application in the cloud w/ a database isnt trivial so hope to do this as last part.
- No frontend form validation
- Testing lacking, especially in the frontend (new framework (jest vs jasmine) for me, so got a little time concerned over that too).
- No integration testing. I would (and have set up elsewhere) cypress for this.
- Only have one (so far loading "icon") and that's just a "loading" text, during server side pagination
- Little scss methodology, mostly setting values empirically
- I didn't fill in the "QTY" column in my data table. Googling it makes that sound like "quantity take off" which I'm assuming I'd get somewhere else.

#### Things that I learned:

- How to set up app as pure "production-ready-ish" microservices, separating client/backend.
- Using functional components with hooks in React with Typescript, still a lot to learn there, exciting!
- A lot about the existing Takeoffs API, though still some confusion as alluded to above. Also, \$ should be ints!
- Another example: why doesn't a product have a storeId? Rather, it has a storeProductId...but there's no storeProduct API?
- Another, the get products API doesnt return the same object every time :curious: e.g. productUnit isn't always present.
- Some calls of the get products API w/ a categoryName query param blows up: e.g. Doors, BuildingBoards, I should handle it better than I am (silence, dont let it block other requests), but ...time (for now!). For example, I could red out the row if there's no result found and slowly animate it away.

## TL;DR

To run locally with production builds:

```
 ./run.sh
```

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

### Setting up Application for development

(Assumed to be have python3.6+ and associated pip available in current working path)

<a href='https://docs.python.org/3.6/library/venv.html'>Here's how you can create a virtual environment in python</a>

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
(runs unittest in app context for Flask context-based unittests) OR $ python -m unittest (which will end up w/ the aforementioned failing.)

$ python run.py
```

\*optional

#### For production, from root project directory

```
./start-backend.sh
```
