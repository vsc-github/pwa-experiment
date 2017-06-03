const request = require('supertest');
const init = require('../server/init');

describe('test the path serving webapp', () => {
    test('response to the GET call', async () => {

        const response = await request(init).get('/');
        expect(response.statusCode).toBe(200);

        })
    })