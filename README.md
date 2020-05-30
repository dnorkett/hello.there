# hello.there
hello.there is a RESTful API used to send and receive Star Wars data. This project was built using Node.js, MongoDB, and React.


## Backend - Node.js / Express
The backend RESTful API allows users to GET, POST, PUT, and DELETE records from the hello.there database.

#### Get all characters
Send a GET request to `/api/characters`

#### Get a specific character
Send a GET request to `/api/characters/{characterID}`

#### Add a new character
Send a POST request to `/api/characters/` using the following JSON format:
```
    name: {
        type: String,
        required: [true, 'name is a required field']
    },
    species: {
        type: String,
        default: 'unknown species'
    },
    forceSensitive: {
        type: Boolean,
        default: false
    },
    homePlanet: {
        type: String,
        default: 'unknown origin'
    },
    notableQuote: {
        type: String,
        default: 'uh, hello?'
    }
```

#### Modify an existing user
Send a PUT request to `/api/characters/{characterID}`using the JSON format mentioned above.

#### Delete an existing user
Send a DELETE request to `/api/characters/{characterID}`


## Database - MongoDB
This application uses a NoSQL MongoDB hosted on AWS / N. Virginia (us-east-1)


## Frontend - React
A simplified graphical user interface was created using React.

