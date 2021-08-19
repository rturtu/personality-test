import React, { useEffect, useState } from "react";
import { QuestionType } from "AppTypes";

const FullPage = styled.div`
    &&& {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        position: relative;
    }
`;

interface Props {}

const PersonalityTest: React.FC<Props> = (props) => {
    const questions = useState<QuestionType[]>([]);
    return <FullPage></FullPage>;
};

export default PersonalityTest;
