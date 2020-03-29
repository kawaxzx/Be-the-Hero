const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })
    afterAll(async () => {
        await connection.destroy();
    })
        it('should be able to create a new ong', async () => {
            const response = await request(app)
                .post('/ongs')
                .send({
                    name: "Arturo213123",
                    email: "burigoarturddto3@hotmail.com",
                    whatsapps: "48998269509",
                    city: "Criciuma",
                    uf: "SC"
                });

            expect(response.body).toHaveProperty('id');

            expect(response.body.id).toHaveLength(8);
    });
})