const request = require('request');
const { expect } = require('chai');

describe('Basic App Tests', () => {
  const baseUrl = 'http://localhost:3000';

  // 1. Server is running
  it('1. Server responds', (done) => {
    request(baseUrl, (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  // 2. HTML contains <title> tag
  it('2. Has valid HTML structure', (done) => {
    request(baseUrl, (err, res, body) => {
      expect(body).to.match(/<title>.*<\/title>/i);
      done();
    });
  });


  // 3. 404 handling
  it('3. Handles unknown routes', (done) => {
    request(`${baseUrl}/nonexistent`, (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

// Test 4
it('4. Homepage contains expected elements', (done) => {
    request('http://localhost:3000', (err, res, body) => {
      if (err) return done(err);
      expect(body).to.include('</html>');
      expect(body).to.include('card-section');
      done();
    });
  });
  // Test 5
  it('5. Static assets are accessible', (done) => {
    request('http://localhost:3000/images/fertilizer.jpeg', (err, res) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  //Test 6
  it('6. Fertilizer image loads successfully', (done) => {
    request(`${baseUrl}/images/fertilizer.jpeg`, (err, res) => {
      expect(res.statusCode).to.equal(200);
      expect(res.headers['content-type']).to.include('image/');
      done();
    });
  });
});