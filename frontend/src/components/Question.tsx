import React, { useState } from "react";
import {
    PrimaryButton,
    SecondaryButton,
    VerticalRow,
} from "./StyledComponents";
import styled from "styled-components";
import { QuestionType, AnswerType } from "../types";

const QuestionWrapper = styled.div`
    &&& {
        width: 20em;
        border: 1px solid ${(props) => props.theme.colors.darkBlue};
    }
`;
const QuestionText = styled.span``;
const AnswersWrapper = styled(VerticalRow)`
    &&& {
        text-align: left;
    }
`;
const ButtonWrapper = styled.div`
    &&& {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
`;

interface Props {
    question: QuestionType;
    setAnswer: (questionId: number, answerId: number) => void;
    isFirstQuestion?: boolean;
    isLastQuestion?: boolean;
    goBack: () => void;
}

const QuestionComponent: React.FC<Props> = (props) => {
    const [selectedAnswerId, setSelectedAnswerId] = useState<number>(
        props.question.selectedAnswerId || -1
    );

    const sendAnswer = (): void => {
        if (selectedAnswerId === -1) return;
        props.setAnswer(props.question.id, selectedAnswerId);
    };

    return (
        <QuestionWrapper>
            <QuestionWrapper>{props.question.text}</QuestionWrapper>
            <AnswersWrapper>
                {props.question.answers.map((answer: AnswerType) => (
                    <div>
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
                {props.isFirstQuestion ? (
                    <span></span>
                ) : (
                    <SecondaryButton onClick={props.goBack}>
                        Go Back
                    </SecondaryButton>
                )}
                <PrimaryButton onClick={sendAnswer}>
                    {props.isLastQuestion ? "See results" : "Next"}
                </PrimaryButton>
            </ButtonWrapper>
        </QuestionWrapper>
    );
};

export default QuestionComponent;
