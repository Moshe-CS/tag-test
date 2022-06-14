// Star Wars API
const baseAPIURL = 'http://swapi.dev/api/';

function init() {
    // The first JSError
    console.error(`Mocking error ${innerHeight + a}`);
}

// https://axios-http.com/docs/example
function getData() {
    axios.get(`${baseAPIURL}planets/1/`)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        });
}

// The first APIError
function getErrorData() {
    axios.get(`${baseAPIURL}planet/1/`)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        });
}

init();
