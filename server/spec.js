var app = require('./server');
var request = require('supertest');
var expect = require('chai').expect;

describe('[LIONS]', function(){

  it('should get all lions', function(done) {
    request(app)
      .get('/lions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        expect(resp.body).to.be.an('array');
        done();
      })
  });
});

it('should create a lion', function(done) {
  request(app)
  .post('/lions')
  .send({
    name: 'Mufasa',
    age: 100,
    pride: 'Evil lions',
    gender: 'male'
  })
  .set('Accept', 'application/json')
  .expect('Content-Type', /json/)
  .expect(201)
  .end(function(err, resp) {
    expect(resp.body).to.be.an('object');
    done();
  })
});

it('should delete a lion', function(done) {
  request(app)
  .post('/lions')
  .send({
    name: 'test lion',
    age: 100,
    pride: 'test lion',
    gender: 'female'
  })
  .set('Accept', 'application/json')
  .end(function(err, resp) {
    var lion = resp.body;
    request(app)
    .delete('/lions/' + lion.id)
    .end(function(err, resp) {
      expect(resp.body).to.eql(lion);
      done();
    });
  })
});

it('should update a lion', function(done) {
  request(app)
    .post('/lions')
    .send({
      name: 'test lion',
      age: 100,
      pride: 'test lion',
      gender:'female'
    })
    .set('Accept', 'application/json')
    .end(function(err, resp) {
      var lion = resp.body;
      request(app)
        .put('/lions/' + lion.id)
        .send({
          name: 'new name'
        })
        .end(function(err, resp) {
          expect(resp.body.name).to.equal('new name');
          done();
        });
    })
});

describe('[TIGERS]', function(){

  it('should get all tigers', function(done) {
    request(app)
      .get('/tigers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        expect(resp.body).to.be.an('array');
        done();
      })
  });
});

it('should create a tiger', function(done) {
  request(app)
  .post('/tigers')
  .send({
    name: 'Mufasa',
    age: 100,
    pride: 'Evil tigers',
    gender: 'male'
  })
  .set('Accept', 'application/json')
  .expect('Content-Type', /json/)
  .expect(201)
  .end(function(err, resp) {
    expect(resp.body).to.be.an('object');
    done();
  })
});

it('should delete a tiger', function(done) {
  request(app)
  .post('/tigers')
  .send({
    name: 'test tiger',
    age: 100,
    pride: 'test tiger',
    gender: 'female'
  })
  .set('Accept', 'application/json')
  .end(function(err, resp) {
    var tiger = resp.body;
    request(app)
    .delete('/tigers/' + tiger.id)
    .end(function(err, resp) {
      expect(resp.body).to.eql(tiger);
      done();
    });
  })
});

it('should update a tiger', function(done) {
  request(app)
    .post('/tigers')
    .send({
      name: 'test tiger',
      age: 100,
      pride: 'test tiger',
      gender:'female'
    })
    .set('Accept', 'application/json')
    .end(function(err, resp) {
      var tiger = resp.body;
      request(app)
        .put('/tigers/' + tiger.id)
        .send({
          name: 'new name'
        })
        .end(function(err, resp) {
          expect(resp.body.name).to.equal('new name');
          done();
        });
    })
});
