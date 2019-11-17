# CET - (CITES-plants E-commerce Tracker)

This is a monitoring system that will flag the sale of any endangered plant species on the E-commerce platforms thus creating awareness to the wildlife authority.

## Getting Started
These instructions should help you run the code on your machine.

### Prerequisites
- The code is ran using [Docker](https://www.docker.com/).
- Ensure to have [Nodejs](https://nodejs.org/en/docs/) installed.

### Installing locally from github

start by cloning the repository from GitHub:

for https use
```
$ git clone https://github.com/PatrickCmd/wild_flora_fauna_cites.git
```

for ssh use 
```
git clone git@github.com:PatrickCmd/wild_flora_fauna_cites.git
```

Start the CET app
```
docker-compose build

docker-compose up
```

### Running the project

In you Working folder Test with this commands 

- Home Page

```
localhost:8000/cites
```

- Populate cites data. This will take five minutes or so....

```
localhost:8000/cites/read_csv
```

- Once loaded and you have received a success json outout, Click on the link provided in json to get you taxon

```
http://localhost:8000/cites/taxon_concepts/
```

- Use filter to filter by scientific name

- Once the app runs the UI can be accessed on
```
http://localhost:3000
```

## Resources Used
- [Python](https://www.python.org/)
- [Postgres](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Django](https://www.djangoproject.com/)
- [Django Rest Framework](https://www.django-rest-framework.org/)
- [NodeJs](https://nodejs.org/en/docs/)
- [React](https://reactjs.org/docs/getting-started.html)
- [Bootstrap 4](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
