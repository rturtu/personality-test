import React from "react";
import Question from "./Question";
import renderer from "../helper/jest";

test("First question is displayed correctly", () => {
    const component = renderer(
        <Question
            question={{
                id: 1,
                text: "This is the first question",
                order: 1,
                answers: [
                    {
                        id: 1,
                        text: "The only answer",
                        order: 1,
                    },
                ],
            }}
            questionIndex={0}
            questionCount={4}
            setAnswer={(questionId, answerId) => {}}
            goBack={() => {}}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test("Middle question is displayed correctly", () => {
    const component = renderer(
        <Question
            question={{
                id: 2,
                text: "This is some middle question",
                order: 2,
                answers: [
                    {
                        id: 1,
                        text: "The only answer",
                        order: 1,
                    },
                ],
            }}
            questionIndex={2}
            questionCount={4}
            setAnswer={(questionId, answerId) => {}}
            goBack={() => {}}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test("Last question is displayed correctly", () => {
    const component = renderer(
        <Question
            question={{
                id: 4,
                text: "This is the last question",
                order: 4,
                answers: [
                    {
                        id: 2,
                        text: "The only answer",
                        order: 1,
                    },
                ],
            }}
            questionIndex={3}
            questionCount={4}
            setAnswer={(questionId, answerId) => {}}
            goBack={() => {}}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
