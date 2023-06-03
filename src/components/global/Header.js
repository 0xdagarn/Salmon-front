import React from "react";

import styled from "@emotion/styled";
import {COLORS} from "../../utils/colors";

const Container = styled.div`
    position: relative;
    
    width: 100%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: 24px 24px;
    box-sizing: border-box;
    
    margin-bottom: 26px;
`;

const Logo = styled.div`
    cursor: pointer;
    
    position: absolute;
    
    width: max-content;
    height: max-content;
    
    left: 24px;
    top: 24px;

    font-style: italic;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    
    color: ${COLORS.blue};
`;

const Center = styled.div`
    width: max-content;
    height: max-content;

    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;
    
    color: white;
`;

function Header() {
    return (
        <Container>
            <Logo>
                Roam
            </Logo>
            <Center>
                Ukraine War
            </Center>
        </Container>
    );
}

export default Header;