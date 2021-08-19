var chai = require("chai");
var chaiHttp = require("chai-http");
var app = require("../app");

chai.use(chaiHttp);
chai.should();

var expect = chai.expect;

const answersSnapshot = [
    {
        id: 1,
        text: "You’re really busy at work and a colleague is telling you their life story and personal woes. You",
        order: 1,
        createdAt: "2021-08-19T17:29:34.022Z",
        updatedAt: "2021-08-19T17:29:34.022Z",
        answers: [
            {
                id: 1,
                text: "Don’t dare to interrupt them",
                order: 1,
                extrovertScore: 25,
                createdAt: "2021-08-19T17:29:56.892Z",
                updatedAt: "2021-08-19T17:37:46.767Z",
                questionId: 1,
            },
            {
                id: 2,
                text: "Think it’s more important to give them some of your time; work can wait ",
                order: 2,
                extrovertScore: 50,
                createdAt: "2021-08-19T17:30:25.688Z",
                updatedAt: "2021-08-19T17:38:19.174Z",
                questionId: 1,
            },
            {
                id: 3,
                text: "Listen, but with only with half an ear",
                order: 3,
                extrovertScore: 75,
                createdAt: "2021-08-19T17:30:44.895Z",
                updatedAt: "2021-08-19T17:48:59.142Z",
                questionId: 1,
            },
            {
                id: 4,
                text: "Interrupt and explain that you are really busy at the moment ",
                order: 4,
                extrovertScore: 100,
                createdAt: "2021-08-19T17:31:22.686Z",
                updatedAt: "2021-08-19T17:31:22.686Z",
                questionId: 1,
            },
        ],
    },
    {
        id: 2,
        text: "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You",
        order: 2,
        createdAt: "2021-08-19T17:31:43.614Z",
        updatedAt: "2021-08-19T17:31:43.614Z",
        answers: [
            {
                id: 5,
                text: "Look at your watch every two minutes ",
                order: 1,
                extrovertScore: 25,
                createdAt: "2021-08-19T17:32:07.213Z",
                updatedAt: "2021-08-19T17:32:07.213Z",
                questionId: 2,
            },
            {
                id: 6,
                text: "Bubble with inner anger, but keep quiet",
                order: 2,
                extrovertScore: 50,
                createdAt: "2021-08-19T17:32:25.459Z",
                updatedAt: "2021-08-19T17:32:25.459Z",
                questionId: 2,
            },
            {
                id: 7,
                text: "Explain to other equally impatient people in the room that the doctor is always running late ",
                order: 3,
                extrovertScore: 75,
                createdAt: "2021-08-19T17:32:41.311Z",
                updatedAt: "2021-08-19T17:32:41.311Z",
                questionId: 2,
            },
            {
                id: 8,
                text: "Complain in a loud voice, while tapping your foot impatiently",
                order: 4,
                extrovertScore: 100,
                createdAt: "2021-08-19T17:32:57.947Z",
                updatedAt: "2021-08-19T17:32:57.947Z",
                questionId: 2,
            },
        ],
    },
    {
        id: 3,
        text: "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You",
        order: 3,
        createdAt: "2021-08-19T17:33:17.406Z",
        updatedAt: "2021-08-19T17:33:17.406Z",
        answers: [
            {
                id: 9,
                text: "Don’t dare contradict them ",
                order: 1,
                extrovertScore: 25,
                createdAt: "2021-08-19T17:33:58.425Z",
                updatedAt: "2021-08-19T17:33:58.425Z",
                questionId: 3,
            },
            {
                id: 10,
                text: "Think that they are obviously right ",
                order: 2,
                extrovertScore: 50,
                createdAt: "2021-08-19T17:34:13.772Z",
                updatedAt: "2021-08-19T17:34:13.772Z",
                questionId: 3,
            },
            {
                id: 11,
                text: "Defend your own point of view, tooth and nail",
                order: 3,
                extrovertScore: 75,
                createdAt: "2021-08-19T17:34:26.122Z",
                updatedAt: "2021-08-19T17:34:26.122Z",
                questionId: 3,
            },
            {
                id: 12,
                text: "Continuously interrupt your colleague ",
                order: 4,
                extrovertScore: 100,
                createdAt: "2021-08-19T17:34:40.107Z",
                updatedAt: "2021-08-19T17:34:40.107Z",
                questionId: 3,
            },
        ],
    },
];

describe("Answers tests", () => {
    it("Should add all the answers from snapshot", (done) => {
        const requestBodies = answersSnapshot.reduce(
            (acc, question) => [
                ...acc,
                ...question.answers.map((answer) => ({
                    text: answer.text,
                    order: answer.order,
                    extrovertScore: answer.extrovertScore,
                    questionId: answer.questionId,
                })),
            ],
            []
        );
        Promise.allSettled(
            requestBodies.map(
                (requestBody) =>
                    new Promise((resolve, reject) => {
                        chai.request(app)
                            .post("/answer")
                            .set("content-type", "application/json")
                            .send(requestBody)
                            .end((err, res) => {
                                res.should.have.status(200);
                                resolve();
                            });
                    })
            )
        ).then(() => {
            done();
        });
    });

    it("Should get all answers", (done) => {
        chai.request(app)
            .get("/answers")
            .end((err, res) => {
                res.should.have.status(200);
                expect(res.body.length).to.equal(12);
                done();
            });
    });
});
