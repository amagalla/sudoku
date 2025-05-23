import { use, expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../app/server/index';

const chai = use(chaiHttp);

const ROUTE = '/api/sudoku/generate';

// quick test just to setup, again this board is hardcoded due to sake of time

// defintely would want to make the board dynamic in my logic and check if board is valid
// or not with invalid tests

describe(`GET ${ROUTE}`, () => {
    context('should pass with valid board', () => {
        it('should return a generated sudoku puzzle', async () => {
            const mockResponse = {
                board: [
                    [5, 3, null, null, 7, null, null, null, null],
                    [6, null, null, 1, 9, 5, null, null, null],
                    [null, 9, 8, null, null, null, null, 6, null],
                    [8, null, null, null, 6, null, null, null, 3],
                    [4, null, null, 8, null, 3, null, null, 1],
                    [7, null, null, null, 2, null, null, null, 6],
                    [null, 6, null, null, null, null, 2, 8, null],
                    [null, null, null, 4, 1, 9, null, null, 5],
                    [null, null, null, null, 8, null, null, 7, 9],
                ]
            };

            const resp = await chai.request(app).get(ROUTE);

            expect(resp.status).to.equal(200);
            expect(resp.body).to.deep.equal(mockResponse);
        });
    });
});