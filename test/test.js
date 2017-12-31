var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var server = require('../server');
var expect = require("chai").expect;
var should = chai.should();

describe('/POST /employee/new', () => {
    it('it should POST a new employee', (done) => {
        var employee = {
            title: "Developer",
            name: "John Doe"
        }
        chai.request(server)
            .post('/employee/new')
            .send(employee)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});