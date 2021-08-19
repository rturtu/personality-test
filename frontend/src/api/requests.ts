import { request } from "./request.js";
import { QuestionType, AnswerType } from "../types";

const url = "http://localhost:9000/";

export const fetchQuestions = (): Promise<QuestionType[]> => {
    return new Promise((resolve, reject) => {
        request(`${url}questions`, { method: "GET" })
            .then((response) => response.json())
            .then((response) => {
                resolve(response as QuestionType[]);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export const fetchResults = (
    answers: { questionId: number; answerId: number }[]
): Promise<number> => {
    return new Promise((resolve, reject) => {
        request(`${url}results`, {
            method: "POST",
            body: JSON.stringify(answers),
        })
            .then((response) => response.json())
            .then((response) => {
                resolve(response.extrovertPercentage);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
