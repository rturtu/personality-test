import React, { useState } from "react";
import {
    PrimaryButton,
    SecondaryButton,
    VerticalRow,
} from "./StyledComponents";
import { Progress } from "semantic-ui-react";
import styled from "styled-components";
import { QuestionType, AnswerType } from "../types";

const QuestionWrapper = styled.div`
    &&& {
        width: 50vw;
        border: 1px solid ${(props) => props.theme.colors.lightBlue};
        padding: 2em;
        @media (max-width: ${(props) => props.theme.screenWidth.mobile}) {
            width: 90vw;
        }
        color: ${(props) => props.theme.colors.darkGrey};
    }
`;
const QuestionText = styled.p`
    &&& {
        font-size: 1.5em;
        align-text: left;
    }
`;
const AnswersWrapper = styled(VerticalRow)`
    &&& {
        text-align: left;
        font-size: 1.5em;
        & > * {
            margin-bottom: 0.7em;
        }
        margin-bottom: 1em;
    }
`;
const ButtonWrapper = styled.div`
    &&& {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        font-size: 1.3em;
    }
`;

interface Props {
    question: QuestionType;
    setAnswer: (questionId: number, answerId: number) => void;
    goBack: () => void;
    questionIndex: number;
    questionCount: number;
}

const QuestionComponent: React.FC<Props> = (props) => {
    const [selectedAnswerId, setSelectedAnswerId] = useState<number>(
        props.question.selectedAnswerId || -1
    );

    const isFirstQuestion = props.questionIndex === 0;
    const isLastQuestion = props.questionIndex === props.questionCount - 1;

    const sendAnswer = (): void => {
        if (selectedAnswerId === -1) return;
        props.setAnswer(props.question.id, selectedAnswerId);
    };

    return (
        <QuestionWrapper>
            {props.questionIndex >= 0 ? (
                <QuestionText>
                    Question {props.questionIndex + 1}
                    {props.questionCount && ` / ${props.questionCount}`}
                </QuestionText>
            ) : (
                <></>
            )}
            <QuestionText>{props.question.text}:</QuestionText>
            <AnswersWrapper>
                {props.question.answers.map((answer: AnswerType) => (
                    <div key={answer.id}>
                        <label onClick={() => setSelectedAnswerId(answer.id)}>
                            <input
                                type="radio"
                                checked={selectedAnswerId === answer.id}
                            />{" "}
                            <span>{answer.text}</span>
                        </label>
                    </div>
                ))}
            </AnswersWrapper>
            <ButtonWrapper>
                {isFirstQuestion ? (
                    <span></span>
                ) : (
                    <SecondaryButton onClick={props.goBack}>
                        Go Back
                    </SecondaryButton>
                )}
                <PrimaryButton onClick={sendAnswer}>
                    {isLastQuestion ? "See results" : "Next"}
                </PrimaryButton>
            </ButtonWrapper>
        </QuestionWrapper>
    );
};

export default QuestionComponent;
