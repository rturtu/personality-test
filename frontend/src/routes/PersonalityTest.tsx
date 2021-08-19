import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { QuestionType } from "../types";
import { fetchQuestions } from "../api/requests";
import Question from "../components/Question";
import { Dimmer, Loader } from "semantic-ui-react";

const FullPage = styled.div`
    &&& {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        position: relative;
    }
`;

const QuestionWrapper = styled.div`
    &&& {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
    }
`;

interface Props {}

const PersonalityTest: React.FC<Props> = (props) => {
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const history = useHistory();

    useEffect(() => {
        fetchQuestions()
            .then((response) => {
                setQuestions(response);
                setCurrentQuestionIndex(0);
                setIsLoading(false);
            })
            .catch((err) => {});
    }, []);

    const goToPreviousQuestion = () => {
        if (currentQuestionIndex > 0)
            setCurrentQuestionIndex(currentQuestionIndex - 1);
    };

    const setAnswer = (questionId: number, answerId: number): void => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setQuestions(
                questions.map((question: QuestionType) =>
                    question.id === questionId
                        ? { ...question, selectedAnswerId: answerId }
                        : question
                )
            );
        } else {
            console.log("am ajuns la final");
            history.push({
                pathname: "/results",
                state: questions.map(
                    (
                        question: QuestionType
                    ): { questionId: number; answerId: number } => ({
                        questionId: question.id,
                        answerId: question.selectedAnswerId || 0,
                    })
                ),
            });
        }
    };

    return (
        <FullPage>
            {isLoading ? (
                <Dimmer active inverted>
                    <Loader />
                </Dimmer>
            ) : (
                <QuestionWrapper>
                    <Question
                        key={currentQuestionIndex}
                        question={questions[currentQuestionIndex]}
                        goBack={goToPreviousQuestion}
                        setAnswer={setAnswer}
                        questionIndex={currentQuestionIndex}
                        questionCount={questions.length}
                    />
                </QuestionWrapper>
            )}
        </FullPage>
    );
};

export default PersonalityTest;
