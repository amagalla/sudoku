Sudoku Node/Express app

This sudoku logic game is handled using node in app/server directory. I wish I have time to include a frontend, but please use postman to run endpoints.

To run project, please have docker installed

npm run serve
(Server is running on localhost:3000)

endpoints are:

GET http://localhost:3000/api/sudoku/generate

POST http://localhost:3000/api/sudoku/move

Using Postman:

A quick invalid move test is

{
    "row": 0,
    "col": 2,
    "value": 5
}

A quick valid move test is

{
    "row": 0,
    "col": 2,
    "value": 1
}

To test run the following command:

npm run test


To run a specific test for example:

TEST_PATH=tests/server/sudoku/move.test.ts npm test