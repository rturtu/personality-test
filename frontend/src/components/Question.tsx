import React from "react";
import {
    PrimaryButton,
    SecondaryButton,
    VerticalRow,
} from "./StyledComponents";
import { QuestionType } from "AppTypes";

const QuestionWrapper = styled.div`
    &&& {
        width: 20em;
        border: 1px solid ${(props) => props.theme.colors.darkBlue};
    }
`;
const QuestionText = styled.span``;
const AnswersWrapper = styled(VerticalRow)``;
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
    setAnswer: (answerId: number) => void;
    isFirstQuestion?: boolean;
    isLastQuestion?: boolean;
    goBack: () => void;
}

const QuestionComponent: React.FC<Props> = (props) => {
    return (
        <QuestionWrapper>
            <QuestionWrapper>{props.question.text}</QuestionWrapper>
            <AnswersWrapper>
                {props.question.answers.map((answer: AnswerType) => (
                    <div>
                        <label>
                            <input type="radio" /> <span>{answer.text}</span>
                        </label>
                    </div>
                ))}
            </AnswersWrapper>
            <ButtonWrapper>
                {props.isFirstQuestion ? (
                    <></>
                ) : (
                    <SecondaryButton>Go Back</SecondaryButton>
                )}
                <PrimaryButton>
                    {props.isLastQuestion ? "See results" : "Next"}
                </PrimaryButton>
            </ButtonWrapper>
        </QuestionWrapper>
    );
};
