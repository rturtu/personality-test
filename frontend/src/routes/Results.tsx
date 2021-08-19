import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { OrangeLink, OrangeText } from "../components/StyledComponents";
import { useHistory } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import { fetchResults } from "../api/requests";

const FullPage = styled.div`
    &&& {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        position: relative;
    }
`;

const TextCenter = styled.div`
    &&& {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        & > h2,
        & > h3 {
            text-align: center;
        }
    }
`;

interface Props extends RouteComponentProps<{}> {}

const Results: React.FC<Props> = (props) => {
    const history = useHistory();

    const hasAnswersState = (): boolean => {
        if (
            !props.location.state ||
            !Array.isArray(props.location.state) ||
            props.location.state.length === 0
        )
            return false;
        return true;
    };

    const [extrovertPercentage, setExtrovertPercentage] = useState<number>(-1);
    useEffect(() => {
        if (hasAnswersState())
            fetchResults(
                props.location.state as {
                    answerId: number;
                    questionId: number;
                }[]
            )
                .then((result) => {
                    console.log(result);
                    setExtrovertPercentage(result);
                })
                .catch((err) => {
                    console.log(err);
                });
    }, []);

    // display error message if results are not available on state
    if (!hasAnswersState())
        return (
            <FullPage>
                <TextCenter>
                    <h2>Looks like you haven't completed the test yet.</h2>
                    <h2>
                        You can{" "}
                        <OrangeLink
                            onClick={() => history.push("/personality-test")}
                        >
                            start here
                        </OrangeLink>
                        .
                    </h2>
                </TextCenter>
            </FullPage>
        );

    return (
        <FullPage>
            <TextCenter>
                <h2>
                    You are{" "}
                    <OrangeText>
                        {extrovertPercentage < 50
                            ? 100 - extrovertPercentage
                            : extrovertPercentage}
                        %
                    </OrangeText>{" "}
                    an{" "}
                    <OrangeText>
                        {extrovertPercentage < 50 ? "introvert" : "extrovert"}
                    </OrangeText>
                    .
                </h2>
                <h3>
                    Redo the test{" "}
                    <OrangeLink
                        onClick={() => history.push("/personality-test")}
                    >
                        here
                    </OrangeLink>
                </h3>
            </TextCenter>
        </FullPage>
    );
};

export default Results;
