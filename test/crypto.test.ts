var cha = require('chai');
var chaiHttp = require('chai-http');
var app = 'http://localhost:5000'
var request = require("supertest")(app);
cha.use(chaiHttp);
var expect = cha.expect;
let token = ''
/** Authentication and user information testing  */
describe('Crypto APIs ', () => {
    it('TC001  Get All Crypto', (done) => {
        cha.request(app)
            .get('/api/crypto')
            .end((err, res) => {
                if (res.body) {
                    expect(res.body.status).to.deep.equal(200);
                    expect(res.body.message).to.deep.equal('Record Fetched successfully');
                    done();
                }
            });
    });
});

describe('Convert Crypto APIs ', () => {
    it('TC002  Convert crypto Success', (done) => {
        const currency = 'bitcoin'
        const coin = 'btc'
        const amount = 2
        cha.request(app)
            .get(`/api/crypto/conversion?currency=${currency}&coin=${coin}&amount=${amount}`)
            .end((err, res) => {
                if (res.body) {
                    expect(res.body.status).to.deep.equal(200);
                    expect(res.body.message).to.deep.equal('Record Fetched successfully');
                    expect(res.body.body).to.deep.equal(amount);
                    done();

                }
            });
    });

    it('TC002  Convert crypto Failure', (done) => {
        const currency = 'bitcoin'
        const coin = 'btc'
        const amount = 2
        cha.request(app)
            .get(`/api/crypto/conversion?currency=${currency}&coin=${coin}&amount=${amount}`)
            .end((err, res) => {
                if (res.body) {
                    expect(res.body.status).to.deep.equal(200);
                    expect(res.body.message).to.deep.equal('Record Fetched successfully');
                    expect(res.body.body).to.not.equal(3);
                    done();

                }
            });
    });
});