import styled, {css} from "styled-components";
import {COLORS} from "../../utils/colors";

export const Tag = styled.div`
    position: relative;
    width: max-content;
    height: 36px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    gap: 8px;
    box-sizing: border-box;

    color: white;
    background-color: ${COLORS.blue};
    border-radius: 32px;
    
    margin-right: 15px;

    ${({active}) =>
            active === 1 &&
            css`
                background-color: ${COLORS.gray_5e};

                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.6);
                }
            `}
`;