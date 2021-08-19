var chai = require("chai");
var chaiHttp = require("chai-http");
var app = require("../app");

chai.use(chaiHttp);
chai.should();

var expect = chai.expect;

describe("Question tests", () => {
    it("Should create the first question", (done) => {
        chai.request(app)
            .post("/question")
            .set("content-type", "application/json")
            .send({
                text: "You’re really busy at work and a colleague is telling you their life story and personal woes. You",
                order: 1,
            })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it("Should create the second question", (done) => {
        chai.request(app)
            .post("/question")
            .set("content-type", "application/json")
            .send({
                text: "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You",
                order: 2,
            })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it("Should create the third question", (done) => {
        chai.request(app)
            .post("/question")
            .set("content-type", "application/json")
            .send({
                text: "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You",
                order: 3,
            })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it("Should get all questions", (done) => {
        chai.request(app)
            .get("/questions")
            .end((err, res) => {
                res.should.have.status(200);
                expect(res.body[0].order).to.equal(1);
                expect(res.body[0].text).to.equal(
                    "You’re really busy at work and a colleague is telling you their life story and personal woes. You"
                );
                expect(res.body[1].order).to.equal(2);
                expect(res.body[1].text).to.equal(
                    "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You"
                );
                expect(res.body[2].order).to.equal(3);
                expect(res.body[2].text).to.equal(
                    "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You"
                );
                done();
            });
    });
});
