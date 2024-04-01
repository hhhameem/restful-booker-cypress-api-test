# Restful-Booker API automation with Cypress

Restful-booker is a Create Read Update Delete Web API that comes with authentication features and loaded with a bunch of bugs for you to explore. The API comes pre-loaded with 10 records for you to work with and resets itself every 10 minutes back to that default state.

In this project we have written Test Cases on some of the endpoints provided by Restful-Booker and automated some test cases with cypress. We also have written a detailed Test Plan and Testing Checklist. All the documents can be found inside Documents directory.

# Technologies used

- Node.js v20.12.0
- Cypress v13.7.1
- chai-json-schema
- chai-xml

# To run the project locally

1. Clone this repository
2. Go inside the projects root directory
3. Run `npm install` and all the dependencies will be installed
4. Run `npm run cypress:open` . This will open the cypress UI

   Or,

5. Run `npm run cypress:run:` . This will run all the test cases in headless mode and a summary of report will be visible in terminal.

# Documents

Please go inside the `Documents` directory of follow the links below

- [Test Plan](https://drive.google.com/file/d/1PDz7jlMmB4eDhLFc8TroDBxLPM0R2n5N/view?usp=sharing)
- [Test Cases](https://docs.google.com/spreadsheets/d/1GZCjxUUy4j3riRQ8qzg7NCfOXODDFAX2/edit?usp=sharing&ouid=105176628969939556054&rtpof=true&sd=true)
- [Testing Checklist](https://drive.google.com/file/d/1vI5GvpRXNADhQHafRZCxwX0an0vDMyax/view?usp=sharing)
