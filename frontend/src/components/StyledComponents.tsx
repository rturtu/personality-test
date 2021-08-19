import { Button } from "semantic-ui-react";
import styled from "styled-components";

export const StyledButton = styled(Button)`
    &&& {
        padding: 0.4em 1em;
        border-radius: 5px;
        border: 0px;
        font-size: 1em;

        &:hover {
            cursor: pointer;
        }
    }
`;

export const PrimaryButton = styled(StyledButton)`
    &&& {
        background-color: ${(props) => props.theme.colors.orange};
        color: white;
    }
`;

export const SecondaryButton = styled(StyledButton)`
    &&& {
        background-color: ${(props) => props.theme.colors.lightBlue};
        color: white;
    }
`;

export const OrangeText = styled.span`
    &&& {
        color: ${(props) => props.theme.colors.orange};
    }
`;

export const Row = styled.div`
    &&& {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }
`;

export const VerticalRow = styled.div`
    &&& {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;
