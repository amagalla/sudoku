import { use, expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../app/server/index';

const chai = use(chaiHttp);

const ROUTE = '/api/sudoku/move';

describe(`POST ${ROUTE}`, () => {
    context('should not pass with invalid input', () => {
        it('should return 400 for invalid value', async () => {
            const invalidInput = {
                row: 200,
                col: 0,
                value: 10
            };

            const resp = await chai.request(app).post(ROUTE).send(invalidInput);

            expect(resp.status).to.equal(400);
            expect(resp.body).to.have.property('error');
        });
        
        it('should return 400 for invalid row', async () => {
            const invalidInput = {
                row: 4,
                col: 110,
                value: 5
            };

            const resp = await chai.request(app).post(ROUTE).send(invalidInput);

            expect(resp.status).to.equal(400);
            expect(resp.body).to.have.property('error');
        });
        
        it('should return 400 for invalid value', async () => {
            const invalidInput = {
                row: 0,
                col: 0,
                value: 10
            };

            const resp = await chai.request(app).post(ROUTE).send(invalidInput);

            expect(resp.status).to.equal(400);
            expect(resp.body).to.have.property('error');
        });
        
        it('should return 400 for not using a number', async () => {
            const invalidInput = {
                row: 'a',
                col: 0,
                value: 10
            };

            const resp = await chai.request(app).post(ROUTE).send(invalidInput);

            expect(resp.status).to.equal(400);
            expect(resp.body).to.have.property('error');
        });
    });

    context('should not pass with ivalid move', () => {
        it('should return 400 for invalid move', async () => {
            const invalidInput = {
                row: 0,
                col: 2,
                value: 5
            };

            const resp = await chai.request(app).post(ROUTE).send(invalidInput);

            expect(resp.status).to.equal(400);
            expect(resp.body).to.have.property('error');
        });
    });
    
    context('should pass with valid move', () => {
        it('should return 400 for invalid move', async () => {
            const invalidInput = {
                row: 0,
                col: 2,
                value: 1
            };

            const resp = await chai.request(app).post(ROUTE).send(invalidInput);

            expect(resp.status).to.equal(200);
        });
    });
});