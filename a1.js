/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Bijay Adhikari Student ID: 141808238 Date: 2024/05/24
*
********************************************************************************/ 
const serverVerbsArray = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPathsArray = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponsesArray = [
    "Welcome to WEB700 Assignment 1",
    "This course name is WEB700. This assignment was prepared by Bijay Adhikari",
    "141808238\nbadhikari13@myseneca.ca",
    "Hello, User Logged In",
    "Main Panel",
    "Logout Complete. Goodbye"
];
// Step 4: Create the web server simulator function - httpRequest
function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPathsArray.length; i++) {
        if (serverVerbsArray[i] === httpVerb && serverPathsArray[i] === path) {
            return `200: ${serverResponsesArray[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}

// Step 5: Manually test the httpRequest function
console.log(httpRequest("GET", "/")); // Should return "200: Welcome to WEB700 Assignment 1"
console.log(httpRequest("GET", "/about")); // Should return "200: This course name is WEB700. This assignment was prepared by Bijay Adhikari"
console.log(httpRequest("POST", "/login")); // Should return "200: Hello, User Logged In"
console.log(httpRequest("GET", "/nonexistent")); // Should return "404: Unable to process GET request for /nonexistent"

// Step 6: Automating the tests by creating the automateTests function

// Utility function to generate a random integer between 0 and a specified maximum
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function automateTests() {
    const testVerbsArray = ["GET", "POST"];
    const testPathsArray = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

    function randomRequest() {
        const randVerb = testVerbsArray[getRandomInt(testVerbsArray.length)];
        const randPath = testPathsArray[getRandomInt(testPathsArray.length)];

        const result = httpRequest(randVerb, randPath);
        console.log(`Request: ${randVerb} ${randPath}, Result: ${result}`);
    }

    setInterval(randomRequest, 1000); // Repeat every 1 second
}

// Step 7: Invoke the automateTests function
automateTests();