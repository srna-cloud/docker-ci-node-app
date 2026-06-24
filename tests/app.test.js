const request = require('supertest');
const app = require('../src/app');

describe('Express aplikacija', () => {
  test('GET / treba da vrati poruku da aplikacija radi', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty(
      'message',
      'Node.js Express aplikacija radi uspešno.',
    );
  });

  test('GET /health treba da vrati status aplikacije', async () => {
    const response = await request(app).get('/health');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status', 'OK');
    expect(response.body).toHaveProperty('service', 'docker-ci-node-app');
  });
});
