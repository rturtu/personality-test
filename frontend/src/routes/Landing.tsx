import React from "react";
import styled from "styled-components";
import {
    OrangeText,
    PrimaryButton,
    VerticalRow,
} from "../components/StyledComponents";
import { Image } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import landingCover from "../assets/landing-cover.jpg";

const FullPage = styled.div`
    &&& {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        position: relative;
    }
`;

const TitleWrapper = styled(VerticalRow)`
    &&& {
        margin-left: 50%;
        margin-top: 10em;

        @media (max-width: ${(props) => props.theme.screenWidth.mobile}) {
            margin: 4em 1em 0em 1em;
        }
    }
`;

const PrimaryTitle = styled.h1`
    &&& {
        line-height: 1.5em;
        @media (max-width: ${(props) => props.theme.screenWidth.mobile}) {
            font-size: 3em;
        }
    }
`;

const CoverImage = styled(Image)`
    &&& {
        transform: translate(-50%, -50%);
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: -1;
        object-fit: cover;
    }
`;

interface Props {}

const LandingPage: React.FC<Props> = (props) => {
    const history = useHistory();

    return (
        <FullPage>
            <CoverImage src={landingCover} />
            <TitleWrapper>
                <PrimaryTitle>
                    Are you an <OrangeText>introvert</OrangeText> or an{" "}
                    <OrangeText>extrovert</OrangeText>?
                </PrimaryTitle>
                <PrimaryTitle>
                    <OrangeText>
                        Discover your personality with our test.{" "}
                    </OrangeText>
                </PrimaryTitle>
                <PrimaryButton
                    style={{
                        fontSize: "2em",
                        marginTop: "1em",
                    }}
                    onClick={() => {
                        history.push("/personality-test");
                    }}
                >
                    Begin test
                </PrimaryButton>
            </TitleWrapper>
        </FullPage>
    );
};

export default LandingPage;
